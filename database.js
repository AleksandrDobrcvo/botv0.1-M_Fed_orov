// Database for Telegram WebApp Game — Firebase Realtime Database + localStorage cache
class GameDatabase {
    constructor() {
        this.adminIds = (window.DB_CONFIG && Array.isArray(window.DB_CONFIG.adminIds)) ? window.DB_CONFIG.adminIds : ['123456789', '987654321'];
        this._firebaseRef = null;
        this._firebaseReady = false;
        this._saveTimer = null;
        this._syncing = false;
        this.defaultData = {
            user: this.createBaseUser(),
            settings: {
                language: 'ru',
                theme: 'dark',
                notifications: true
            },
            onlineCount: 1,
            otherUsers: {},
            requests: [],
            adminLog: [],
            notifications: [],
            supportTickets: [],
            financeOperations: [],
            heroOperations: [],
            finance: {
                rnxRate: 10000,
                networkFee: 0.1,
                exchangeWithdrawRatio: 0.3,
                heroConfig: {
                    sellCoef: 0.50,
                    upgradeCostMultiplier: 1.24
                },
                deposit: {
                    min: 5,
                    max: 10000,
                    methods: {
                        ton: true,
                        usdt_bep20: true,
                        usdt_trc20: true,
                        tron_trx: true
                    }
                },
                withdraw: {
                    min: 1,
                    max: 10000,
                    methods: {
                        ton: true
                    }
                }
            },
            referralConfig: {
                fixedReward: 500,
                levels: [
                    { level: 1, percentage: 5 },
                    { level: 2, percentage: 3 },
                    { level: 3, percentage: 1 }
                ]
            },
            promoCodes: [],
            tasks: []
        };

        try {
            if (window.DB_CONFIG && window.DB_CONFIG.defaultData) {
                const cfg = window.DB_CONFIG.defaultData;
                if (cfg.settings) this.defaultData.settings = { ...this.defaultData.settings, ...cfg.settings };
                if (cfg.user) this.defaultData.user = this.normalizeUser({ ...this.defaultData.user, ...cfg.user });
            }
        } catch (error) {
            console.warn('DB config merge failed:', error);
        }

        this.loadData();
    }

    createBaseUser(overrides = {}) {
        return {
            id: '',
            username: '@user',
            name: 'User',
            photoUrl: '',
            isAdmin: false,
            balance: 0,
            balanceBuy: 0,
            balanceWithdraw: 0,
            rnxBalance: 0,
            referralCode: '',
            referredBy: '',
            referralEarnings: 0,
            rating: { position: 0, score: 0 },
            registrationDate: new Date().toISOString(),
            heroes: [],
            lastSeen: new Date().toISOString(),
            isOnline: false,
            stats: {
                minedOre: 0,
                level: 1,
                purchased: 0,
                invited: 0,
                deposited: 0,
                withdrawn: 0,
                referrals: 0,
                totalRnxEarned: 0,
                totalExchanged: 0
            },
            ...overrides
        };
    }

    createEntityId(prefix) {
        return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    }

    getHeroRarityMultiplier(rarityKey = 'common') {
        const map = {
            starter: 1,
            common: 1,
            rare: 1.22,
            epic: 1.52,
            legendary: 1.88
        };
        return map[rarityKey] || 1;
    }

    calculateHeroProfit(baseProfitPerHour, level = 1, growthRate = 0.18) {
        const safeBaseProfit = Math.max(1, Number(baseProfitPerHour || 0));
        const safeLevel = Math.max(1, Number(level || 1));
        const safeGrowthRate = Number(growthRate || 0.18);
        return Math.max(1, Math.round(safeBaseProfit * (1 + (safeLevel - 1) * safeGrowthRate)));
    }

    calculateHeroUpgradeCost(hero = {}) {
        const safeLevel = Math.max(1, Number(hero.level || 1));
        const baseUpgradePrice = Math.max(10, Number(hero.baseUpgradePrice || hero.price || 10));
        const multiplier = Number(this.data?.finance?.heroConfig?.upgradeCostMultiplier ?? this.defaultData.finance.heroConfig.upgradeCostMultiplier);
        return Math.round(baseUpgradePrice * Math.pow(multiplier, safeLevel - 1) * this.getHeroRarityMultiplier(hero.rarityKey));
    }

    calculateHeroSellValue(hero = {}) {
        const level = Math.max(1, Number(hero.level || 1));
        const price = Math.max(0, Number(hero.price || 0));
        const upgradesInvested = Math.max(0, Number(hero.totalUpgradeSpent || 0));
        const coef = Number(this.data?.finance?.heroConfig?.sellCoef ?? this.defaultData.finance.heroConfig.sellCoef);
        return Math.round(price * coef + upgradesInvested * (coef * 0.65) + (level - 1) * 8);
    }

    calculateHeroReissueCost(hero = {}) {
        return Math.max(10, Math.round(this.calculateHeroUpgradeCost(hero) * 0.34));
    }

    normalizeHero(hero) {
        const source = hero || {};
        const price = Math.max(0, Number(source.price || 0));
        const level = Math.max(1, Number(source.level || 1));
            const heroKey = String(source.heroId || source.id || '');
            const isTestHero = Boolean(source.isTestHero || heroKey === 'h_starter');
            const canonicalDurationHours = isTestHero ? 1 : 24;
            const sourceDurationHours = Math.max(1, Number(source.durationHours || canonicalDurationHours));
            const durationHours = canonicalDurationHours;
        const rarityKey = source.rarityKey || 'common';
        const baseProfitPerHour = Math.max(1, Number(source.baseProfitPerHour ?? source.profitPerHour ?? 1));
        const growthRate = Number(source.growthRate ?? 0.18);
        const baseUpgradePrice = Math.max(10, Number(source.baseUpgradePrice || Math.round(Math.max(price, baseProfitPerHour * durationHours) * 0.45) || 10));
        const profitPerHour = this.calculateHeroProfit(baseProfitPerHour, level, growthRate);
        const acquiredAt = source.acquiredAt || source.purchasedAt || new Date().toISOString();
            const rawCycleStartedAt = source.cycleStartedAt || acquiredAt;
            const rawCycleEndsAt = source.cycleEndsAt || new Date(new Date(rawCycleStartedAt).getTime() + sourceDurationHours * 60 * 60 * 1000).toISOString();
            let cycleStartedAt = rawCycleStartedAt;
            let cycleEndsAt = rawCycleEndsAt;
            if (sourceDurationHours !== durationHours) {
                const startMs = new Date(rawCycleStartedAt).getTime();
                const endMs = new Date(rawCycleEndsAt).getTime();
                const oldDurationMs = Math.max(1, sourceDurationHours) * 60 * 60 * 1000;
                const newDurationMs = durationHours * 60 * 60 * 1000;
                const nowMs = Date.now();
                const elapsedMs = Number.isFinite(startMs) ? Math.max(0, nowMs - startMs) : 0;
                const progress = Number.isFinite(startMs) && Number.isFinite(endMs) && endMs > startMs
                    ? Math.min(1, Math.max(0, (nowMs - startMs) / Math.max(1, endMs - startMs)))
                    : Math.min(1, elapsedMs / oldDurationMs);
                const migratedStartMs = nowMs - Math.round(newDurationMs * progress);
                cycleStartedAt = new Date(migratedStartMs).toISOString();
                cycleEndsAt = new Date(migratedStartMs + newDurationMs).toISOString();
            }
            // Hard-cap: if cycle end is more than durationHours away, reset to fresh cycle
            {
                const _capNow = Date.now();
                const _capMax = durationHours * 60 * 60 * 1000;
                if (new Date(cycleEndsAt).getTime() - _capNow > _capMax + 120000) {
                    cycleStartedAt = new Date(_capNow).toISOString();
                    cycleEndsAt = new Date(_capNow + _capMax).toISOString();
                }
            }
        const totalUpgradeSpent = Math.max(0, Number(source.totalUpgradeSpent || 0));

        return {
            id: String(source.id || source.heroId || this.createEntityId('hero_template')),
            heroId: String(source.heroId || source.id || this.createEntityId('hero_template')),
            instanceId: String(source.instanceId || source.inventoryId || this.createEntityId('hero')),
            name: source.name || 'Hero',
            description: source.description || '',
            role: source.role || '',
            rarityKey,
            price,
            level,
            durationHours,
            baseProfitPerHour,
            growthRate,
            profitPerHour,
            totalProfit: Math.round(profitPerHour * durationHours),
            baseUpgradePrice,
            nextUpgradeCost: Math.max(10, Number(source.nextUpgradeCost || this.calculateHeroUpgradeCost({
                ...source,
                level,
                rarityKey,
                baseUpgradePrice
            }))),
            sellValue: Math.max(0, Number(source.sellValue || this.calculateHeroSellValue({
                ...source,
                level,
                price,
                totalUpgradeSpent
            }))),
            reissueCost: Math.max(10, Number(source.reissueCost || this.calculateHeroReissueCost({
                ...source,
                level,
                rarityKey,
                baseUpgradePrice
            }))),
            image: source.image || '',
            isTestHero,
            source: source.source || 'shop',
            grantedByAdmin: Boolean(source.grantedByAdmin),
            purchasedAt: source.purchasedAt || source.acquiredAt || new Date().toISOString(),
            acquiredAt,
            cycleStartedAt,
            cycleEndsAt,
            cyclesCompleted: Math.max(0, Number(source.cyclesCompleted || 0)),
            lifetimeEarnings: Math.max(0, Number(source.lifetimeEarnings || 0)),
            lastPayoutAt: source.lastPayoutAt || '',
            totalUpgradeSpent
        };
    }

    normalizeUser(user) {
        const baseUser = this.createBaseUser();
        const normalized = {
            ...baseUser,
            ...(user || {}),
            rating: { ...baseUser.rating, ...((user && user.rating) || {}) },
            stats: { ...baseUser.stats, ...((user && user.stats) || {}) },
            heroes: Array.isArray(user && user.heroes) ? user.heroes.map((hero) => this.normalizeHero(hero)) : []
        };

        normalized.id = normalized.id ? String(normalized.id) : '';
        normalized.isAdmin = Boolean(normalized.isAdmin || (normalized.id && this.isAdmin(String(normalized.id))));
        normalized.balance = Number(normalized.balance || 0);
        normalized.balanceBuy = Number(normalized.balanceBuy || 0);
        normalized.balanceWithdraw = Number(normalized.balanceWithdraw || 0);
        normalized.rnxBalance = Number(normalized.rnxBalance || 0);
        normalized.referralCode = normalized.referralCode || '';
        normalized.referredBy = normalized.referredBy || '';
        normalized.referralEarnings = Number(normalized.referralEarnings || 0);
        normalized.lastSeen = normalized.lastSeen || '';
        normalized.isOnline = Boolean(normalized.isOnline);
        return normalized;
    }

    normalizeData(data) {
        const source = data || {};
        const otherUsers = source.otherUsers || {};
        const normalizedOtherUsers = {};

        Object.keys(otherUsers).forEach((key) => {
            normalizedOtherUsers[String(key)] = this.normalizeUser({ ...otherUsers[key], id: String(key) });
        });

        return {
            ...this.defaultData,
            ...source,
            user: this.normalizeUser(source.user || this.defaultData.user),
            settings: { ...this.defaultData.settings, ...(source.settings || {}) },
            onlineCount: Number(source.onlineCount ?? this.defaultData.onlineCount),
            otherUsers: normalizedOtherUsers,
            requests: Array.isArray(source.requests) ? source.requests : [],
            adminLog: Array.isArray(source.adminLog) ? source.adminLog : [],
            notifications: Array.isArray(source.notifications) ? source.notifications : [],
            supportTickets: Array.isArray(source.supportTickets) ? source.supportTickets : [],
            heroOperations: Array.isArray(source.heroOperations) ? source.heroOperations : [],
            finance: {
                rnxRate: Number((source.finance && source.finance.rnxRate) || this.defaultData.finance.rnxRate),
                networkFee: Number((source.finance && source.finance.networkFee) != null ? source.finance.networkFee : this.defaultData.finance.networkFee),
                exchangeWithdrawRatio: Number((source.finance && source.finance.exchangeWithdrawRatio != null) ? source.finance.exchangeWithdrawRatio : this.defaultData.finance.exchangeWithdrawRatio),
                heroConfig: {
                    sellCoef: Number((source.finance && source.finance.heroConfig && source.finance.heroConfig.sellCoef != null) ? source.finance.heroConfig.sellCoef : this.defaultData.finance.heroConfig.sellCoef),
                    upgradeCostMultiplier: Number((source.finance && source.finance.heroConfig && source.finance.heroConfig.upgradeCostMultiplier != null) ? source.finance.heroConfig.upgradeCostMultiplier : this.defaultData.finance.heroConfig.upgradeCostMultiplier)
                },
                deposit: {
                    ...this.defaultData.finance.deposit,
                    ...((source.finance && source.finance.deposit) || {}),
                    methods: {
                        ...this.defaultData.finance.deposit.methods,
                        ...(((source.finance && source.finance.deposit) || {}).methods || {})
                    }
                },
                withdraw: {
                    ...this.defaultData.finance.withdraw,
                    ...((source.finance && source.finance.withdraw) || {}),
                    methods: {
                        ...this.defaultData.finance.withdraw.methods,
                        ...(((source.finance && source.finance.withdraw) || {}).methods || {})
                    }
                }
            },
            referralConfig: {
                ...this.defaultData.referralConfig,
                ...((source.referralConfig) || {}),
                levels: Array.isArray(source.referralConfig && source.referralConfig.levels) ? source.referralConfig.levels : this.defaultData.referralConfig.levels
            },
            promoCodes: Array.isArray(source.promoCodes) ? source.promoCodes : [],
            tasks: Array.isArray(source.tasks) ? source.tasks : [],
            financeOperations: Array.isArray(source.financeOperations) ? source.financeOperations : []
        };
    }

    loadData() {
        try {
            const savedData = localStorage.getItem('gameData');
            this.data = savedData ? this.normalizeData(JSON.parse(savedData)) : this.normalizeData();
        } catch (error) {
            console.error('Error loading data:', error);
            this.data = this.normalizeData();
        }
    }

    saveData() {
        try {
            localStorage.setItem('gameData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
        this._debouncedFirebaseSave();
    }

    // ── Firebase integration ──────────────────────────────────────

    async initFirebase() {
        const cfg = window.DB_CONFIG && window.DB_CONFIG.firebase;
        if (!cfg || !cfg.databaseURL || typeof firebase === 'undefined') {
            console.warn('Firebase not configured — using localStorage only');
            return;
        }

        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(cfg);
            }
            this._firebaseRef = firebase.database().ref();
            this._firebaseReady = true;

            // Load data from Firebase (merge with local cache)
            await this._loadFromFirebase();

            // Setup real-time listener for changes from other clients
            this._setupFirebaseListeners();

            console.log('Firebase connected');
        } catch (error) {
            console.error('Firebase init error:', error);
            this._firebaseReady = false;
        }
    }

    async _loadFromFirebase() {
        if (!this._firebaseRef) return;

        try {
            const snapshot = await this._firebaseRef.once('value');
            const raw = snapshot.val();
            if (!raw) {
                // Firebase is empty — push current local data as initial seed
                await this._pushToFirebase();
                return;
            }

            const currentUserId = String(this.data.user.id || '');

            // Reconstruct data from Firebase structure
            const fbUsers = raw.users || {};
            const currentUserFromFb = currentUserId ? fbUsers[currentUserId] : null;
            const otherUsers = {};

            Object.entries(fbUsers).forEach(([key, val]) => {
                if (key !== currentUserId && val) {
                    otherUsers[key] = val;
                }
            });

            const mergedData = {
                user: currentUserFromFb
                    ? { ...this.data.user, ...currentUserFromFb, id: currentUserId }
                    : {
                        // Новий користувач не знайдений у Firebase — стартуємо з нуля,
                        // беремо тільки дані з Telegram (id/name/username),
                        // щоб не показувати баланс попереднього акаунту
                        ...this.createBaseUser(),
                        id: currentUserId,
                        username: this.data.user.username,
                        name: this.data.user.name,
                        photoUrl: this.data.user.photoUrl,
                        isAdmin: this.isAdmin(currentUserId),
                        registrationDate: new Date().toISOString()
                    },
                otherUsers,
                settings: raw.settings || this.data.settings,
                onlineCount: raw.onlineCount != null ? raw.onlineCount : this.data.onlineCount,
                requests: Array.isArray(raw.requests) ? raw.requests : (this.data.requests || []),
                adminLog: Array.isArray(raw.adminLog) ? raw.adminLog : (this.data.adminLog || []),
                notifications: Array.isArray(raw.notifications) ? raw.notifications : (this.data.notifications || []),
                supportTickets: Array.isArray(raw.supportTickets) ? raw.supportTickets : (this.data.supportTickets || []),
                financeOperations: Array.isArray(raw.financeOperations) ? raw.financeOperations : (this.data.financeOperations || []),
                heroOperations: Array.isArray(raw.heroOperations) ? raw.heroOperations : (this.data.heroOperations || []),
                finance: raw.finance || this.data.finance,
                referralConfig: raw.referralConfig || this.data.referralConfig,
                promoCodes: Array.isArray(raw.promoCodes) ? raw.promoCodes : (this.data.promoCodes || []),
                tasks: Array.isArray(raw.tasks) ? raw.tasks : (this.data.tasks || [])
            };

            this.data = this.normalizeData(mergedData);
            localStorage.setItem('gameData', JSON.stringify(this.data));
        } catch (error) {
            console.error('Firebase load error:', error);
        }
    }

    async _pushToFirebase() {
        if (!this._firebaseRef) return;

        try {
            this._syncing = true;
            const updates = this._buildFirebaseUpdates();
            await this._firebaseRef.update(updates);
        } catch (error) {
            console.error('Firebase push error:', error);
        } finally {
            setTimeout(() => { this._syncing = false; }, 300);
        }
    }

    _buildFirebaseUpdates() {
        const userId = String(this.data.user.id || '');
        const updates = {};

        if (userId) {
            updates[`users/${userId}`] = this.data.user;
        }

        // Include other users modified by admin
        Object.entries(this.data.otherUsers || {}).forEach(([key, val]) => {
            if (key && val) updates[`users/${key}`] = val;
        });

        updates['settings'] = this.data.settings || null;
        updates['onlineCount'] = this.data.onlineCount || 0;
        updates['requests'] = this.data.requests || [];
        updates['adminLog'] = this.data.adminLog || [];
        updates['notifications'] = this.data.notifications || [];
        updates['supportTickets'] = this.data.supportTickets || [];
        updates['financeOperations'] = this.data.financeOperations || [];
        updates['heroOperations'] = this.data.heroOperations || [];
        updates['finance'] = this.data.finance || null;
        updates['referralConfig'] = this.data.referralConfig || null;
        updates['promoCodes'] = this.data.promoCodes || [];
        updates['tasks'] = this.data.tasks || [];

        return updates;
    }

    _debouncedFirebaseSave() {
        if (!this._firebaseReady) return;
        clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => {
            this._pushToFirebase();
        }, 500);
    }

    _setupFirebaseListeners() {
        if (!this._firebaseRef) return;

        this._firebaseRef.on('value', (snapshot) => {
            if (this._syncing) return;
            const raw = snapshot.val();
            if (!raw) return;

            const currentUserId = String(this.data.user.id || '');
            const fbUsers = raw.users || {};
            const otherUsers = {};

            Object.entries(fbUsers).forEach(([key, val]) => {
                if (key !== currentUserId && val) {
                    otherUsers[key] = val;
                }
            });

            // Merge: keep local user data, update everything else from Firebase
            const currentUserFromFb = currentUserId ? fbUsers[currentUserId] : null;
            // Preserve local online status (prevents race condition with Firebase sync)
            const localIsOnline = this.data.user.isOnline;
            const localLastSeen = this.data.user.lastSeen;

            this.data = this.normalizeData({
                user: currentUserFromFb
                    ? { ...this.data.user, ...currentUserFromFb, id: currentUserId, isOnline: localIsOnline, lastSeen: localLastSeen }
                    : this.data.user,
                otherUsers,
                settings: raw.settings || this.data.settings,
                onlineCount: raw.onlineCount != null ? raw.onlineCount : this.data.onlineCount,
                requests: Array.isArray(raw.requests) ? raw.requests : this.data.requests,
                adminLog: Array.isArray(raw.adminLog) ? raw.adminLog : this.data.adminLog,
                notifications: Array.isArray(raw.notifications) ? raw.notifications : this.data.notifications,
                supportTickets: Array.isArray(raw.supportTickets) ? raw.supportTickets : this.data.supportTickets,
                financeOperations: Array.isArray(raw.financeOperations) ? raw.financeOperations : this.data.financeOperations,
                heroOperations: Array.isArray(raw.heroOperations) ? raw.heroOperations : this.data.heroOperations,
                finance: raw.finance || this.data.finance,
                referralConfig: raw.referralConfig || this.data.referralConfig,
                promoCodes: Array.isArray(raw.promoCodes) ? raw.promoCodes : this.data.promoCodes,
                tasks: Array.isArray(raw.tasks) ? raw.tasks : this.data.tasks
            });

            localStorage.setItem('gameData', JSON.stringify(this.data));

            // Auto-refresh UI when data changes from another client
            if (typeof renderApp === 'function') {
                try { renderApp(); } catch (e) { /* silent */ }
            }
        });
    }

    isAdmin(userId) {
        return this.adminIds.includes(String(userId));
    }

    setAdminAccessById(id, isAdmin, meta = {}) {
        const targetId = String(id || '');
        let user = this.getUserById(targetId);
        if (!user && targetId) {
            // Create a stub user entry for the target ID
            user = this.updateUserById(targetId, { id: targetId, isAdmin: Boolean(isAdmin) });
        }
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const updated = this.updateUserById(targetId, {
            isAdmin: Boolean(isAdmin)
        });

        this.createAdminLog({
            type: Boolean(isAdmin) ? 'admin-access-granted' : 'admin-access-revoked',
            adminId: String(meta.adminId || ''),
            targetUserId: targetId,
            reason: meta.reason || ''
        });

        this.createNotification({
            type: Boolean(isAdmin) ? 'success' : 'info',
            title: Boolean(isAdmin) ? 'Доступ администратора выдан' : 'Доступ администратора снят',
            message: meta.reason || (Boolean(isAdmin) ? 'Вам открыт доступ к панели управления.' : 'Ваш доступ к панели управления отключён.'),
            audience: 'user',
            userId: targetId
        });

        return { success: true, user: updated };
    }

    updateUser(userData) {
        this.data.user = this.normalizeUser({ ...this.data.user, ...userData });
        this.saveData();
        return this.data.user;
    }

    getUser() {
        return this.data.user;
    }

    updateBalance(amount) {
        this.data.user.balance = Math.max(0, Number(this.data.user.balance || 0) + Number(amount || 0));
        this.saveData();
        return this.data.user.balance;
    }

    updateBalanceBuy(amount) {
        this.data.user.balanceBuy = Math.max(0, Number(this.data.user.balanceBuy || 0) + Number(amount || 0));
        this.saveData();
        return this.data.user.balanceBuy;
    }

    updateBalanceWithdraw(amount) {
        this.data.user.balanceWithdraw = Math.max(0, Number(this.data.user.balanceWithdraw || 0) + Number(amount || 0));
        this.saveData();
        return this.data.user.balanceWithdraw;
    }

    updateRnxBalance(amount) {
        this.data.user.rnxBalance = Math.max(0, Number(this.data.user.rnxBalance || 0) + Number(amount || 0));
        this.saveData();
        return this.data.user.rnxBalance;
    }

    getRnxRate() {
        return Number(this.data.finance.rnxRate || 10000);
    }

    getNetworkFee() {
        return Number(this.data.finance.networkFee != null ? this.data.finance.networkFee : 0.1);
    }

    exchangeRnxToTon(userId, rnxAmount) {
        const user = this.getUserById(userId);
        if (!user) return { success: false, reason: 'user-not-found' };
        const available = Number(user.rnxBalance || 0);
        if (rnxAmount <= 0 || rnxAmount > available) return { success: false, reason: 'insufficient-rnx' };

        const rate = this.getRnxRate();
        const tonAmount = rnxAmount / rate;
        const withdrawRatio = Number(this.data?.finance?.exchangeWithdrawRatio ?? 0.3);
        const withdrawTon = tonAmount * withdrawRatio;
        const buyTon = tonAmount * (1 - withdrawRatio);

        const updated = this.updateUserById(userId, {
            rnxBalance: Math.max(0, available - rnxAmount),
            balanceBuy: Number(user.balanceBuy || 0) + buyTon,
            balanceWithdraw: Number(user.balanceWithdraw || 0) + withdrawTon,
            stats: { ...user.stats, totalExchanged: Number(user.stats?.totalExchanged || 0) + rnxAmount }
        });

        const withdrawPct = Math.round(withdrawRatio * 100);
        const buyPct = 100 - withdrawPct;
        this.createFinanceOperation({
            type: 'exchange',
            status: 'completed',
            userId: String(userId),
            username: updated.username,
            amount: tonAmount,
            method: 'rnx-exchange',
            details: `${rnxAmount} $RNX → ${tonAmount.toFixed(4)} TON (${buyPct}% покупка / ${withdrawPct}% вывод)`,
            comment: '',
            resolvedAt: new Date().toISOString()
        });

        return { success: true, user: updated, tonAmount, withdrawTon, buyTon };
    }

    generateReferralCode(userId) {
        const code = `REF_${String(userId).slice(-4)}_${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
        this.updateUserById(userId, { referralCode: code });
        return code;
    }

    getReferralConfig() {
        return this.data.referralConfig || this.defaultData.referralConfig;
    }

    updateReferralConfig(partial) {
        this.data.referralConfig = { ...this.data.referralConfig, ...partial };
        if (partial.levels) this.data.referralConfig.levels = partial.levels;
        this.saveData();
        return this.data.referralConfig;
    }

    applyReferral(newUserId, referralCode) {
        const allUsers = this.getAllUsers();
        const referrer = allUsers.find((u) => u.referralCode === referralCode);
        if (!referrer || String(referrer.id) === String(newUserId)) return { success: false, reason: 'invalid-code' };

        this.updateUserById(newUserId, { referredBy: referralCode });
        const config = this.getReferralConfig();
        const rnxReward = Number(config.fixedReward || 500);

        this.updateUserById(referrer.id, {
            rnxBalance: Number(referrer.rnxBalance || 0) + rnxReward,
            referralEarnings: Number(referrer.referralEarnings || 0) + rnxReward,
            stats: {
                ...referrer.stats,
                referrals: Number(referrer.stats?.referrals || 0) + 1,
                invited: Number(referrer.stats?.invited || 0) + 1
            }
        });

        this.createNotification({
            type: 'success',
            title: 'Новый реферал',
            message: `+${rnxReward} $RNX за приглашение пользователя`,
            audience: 'user',
            userId: String(referrer.id)
        });

        // Welcome notification for new user
        this.createNotification({
            type: 'info',
            title: '🎉 Добро пожаловать!',
            message: `Ты зашёл по реферальной ссылке и получаешь +${Math.round(rnxReward * 0.1)} $RNX приветственного бонуса`,
            audience: 'user',
            userId: String(newUserId)
        });

        // Add welcome bonus for the new user too
        const newUser = this.getUserById(newUserId);
        if (newUser) {
            const welcomeBonus = Math.round(rnxReward * 0.1);
            this.updateUserById(newUserId, {
                rnxBalance: Number(newUser.rnxBalance || 0) + welcomeBonus
            });
        }

        return { success: true, referrerId: referrer.id, reward: rnxReward };
    }

    applyReferralDepositBonus(userId, depositTon) {
        const user = this.getUserById(userId);
        if (!user || !user.referredBy) return;

        const config = this.getReferralConfig();
        const allUsers = this.getAllUsers();

        let currentCode = user.referredBy;
        for (let level = 0; level < (config.levels || []).length; level++) {
            const referrer = allUsers.find((u) => u.referralCode === currentCode);
            if (!referrer) break;

            const pct = Number(config.levels[level]?.percentage || 0);
            const bonus = depositTon * (pct / 100);
            if (bonus > 0) {
                this.updateUserById(referrer.id, {
                    balanceBuy: Number(referrer.balanceBuy || 0) + bonus,
                    referralEarnings: Number(referrer.referralEarnings || 0) + bonus
                });
                this.createNotification({
                    type: 'success',
                    title: `Реферальный бонус (ур.${level + 1})`,
                    message: `+${bonus.toFixed(4)} TON`,
                    audience: 'user',
                    userId: String(referrer.id)
                });
            }

            currentCode = referrer.referredBy;
            if (!currentCode) break;
        }
    }

    getPromoCodes() {
        return Array.isArray(this.data.promoCodes) ? this.data.promoCodes : [];
    }

    createPromoCode(payload) {
        const promo = {
            id: `promo_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            code: String(payload.code || '').toUpperCase().trim(),
            rewardRnx: Number(payload.rewardRnx || 0),
            rewardTon: Number(payload.rewardTon || 0),
            maxUses: Number(payload.maxUses || 1),
            usedBy: [],
            active: true,
            createdAt: new Date().toISOString()
        };
        this.data.promoCodes.unshift(promo);
        this.saveData();
        return promo;
    }

    redeemPromoCode(userId, code) {
        const normalCode = String(code || '').toUpperCase().trim();
        const promo = this.getPromoCodes().find((p) => p.code === normalCode && p.active);
        if (!promo) return { success: false, reason: 'not-found' };
        if (promo.usedBy.includes(String(userId))) return { success: false, reason: 'already-used' };
        if (promo.usedBy.length >= promo.maxUses) return { success: false, reason: 'expired' };

        promo.usedBy.push(String(userId));
        const user = this.getUserById(userId);
        const updates = {};
        if (promo.rewardRnx > 0) updates.rnxBalance = Number(user.rnxBalance || 0) + promo.rewardRnx;
        if (promo.rewardTon > 0) updates.balanceBuy = Number(user.balanceBuy || 0) + promo.rewardTon;
        if (Object.keys(updates).length) this.updateUserById(userId, updates);

        this.createNotification({
            type: 'success',
            title: 'Промокод активирован',
            message: `${promo.rewardRnx ? promo.rewardRnx + ' $RNX' : ''}${promo.rewardRnx && promo.rewardTon ? ' + ' : ''}${promo.rewardTon ? promo.rewardTon + ' TON' : ''}`,
            audience: 'user',
            userId: String(userId)
        });

        this.saveData();
        return { success: true, promo };
    }

    updateRating(position, score) {
        this.data.user.rating = { position, score };
        this.saveData();
        return this.data.user.rating;
    }

    updateStats(stats) {
        this.data.user.stats = { ...this.data.user.stats, ...stats };
        this.saveData();
        return this.data.user.stats;
    }

    resetUserData() {
        this.data.user = this.createBaseUser();
        this.saveData();
        return this.data.user;
    }

    updateSettings(settings) {
        this.data.settings = { ...this.data.settings, ...settings };
        this.saveData();
        return this.data.settings;
    }

    getSettings() {
        return this.data.settings;
    }

    getFinanceConfig() {
        return this.data.finance;
    }

    updateFinanceConfig(partial) {
        this.data.finance = {
            rnxRate: Number((partial && partial.rnxRate) || this.data.finance.rnxRate || 10000),
            networkFee: (partial && partial.networkFee != null) ? Number(partial.networkFee) : Number(this.data.finance.networkFee != null ? this.data.finance.networkFee : 0.1),
            exchangeWithdrawRatio: (partial && partial.exchangeWithdrawRatio != null) ? Math.min(1, Math.max(0, Number(partial.exchangeWithdrawRatio))) : Number(this.data.finance.exchangeWithdrawRatio ?? 0.3),
            heroConfig: {
                sellCoef: (partial && partial.heroConfig && partial.heroConfig.sellCoef != null) ? Math.min(1, Math.max(0.1, Number(partial.heroConfig.sellCoef))) : Number(this.data.finance.heroConfig?.sellCoef ?? 0.50),
                upgradeCostMultiplier: (partial && partial.heroConfig && partial.heroConfig.upgradeCostMultiplier != null) ? Math.max(1, Number(partial.heroConfig.upgradeCostMultiplier)) : Number(this.data.finance.heroConfig?.upgradeCostMultiplier ?? 1.24)
            },
            deposit: {
                ...this.data.finance.deposit,
                ...((partial && partial.deposit) || {}),
                methods: {
                    ...this.data.finance.deposit.methods,
                    ...((((partial && partial.deposit) || {}).methods) || {})
                }
            },
            withdraw: {
                ...this.data.finance.withdraw,
                ...((partial && partial.withdraw) || {}),
                methods: {
                    ...this.data.finance.withdraw.methods,
                    ...((((partial && partial.withdraw) || {}).methods) || {})
                }
            }
        };
        this.saveData();
        return this.data.finance;
    }

    isMethodEnabled(type, methodKey) {
        return Boolean(this.data.finance?.[type]?.methods?.[methodKey]);
    }

    getTasks() {
        return Array.isArray(this.data.tasks) ? this.data.tasks : [];
    }

    getTaskById(id) {
        return this.getTasks().find((item) => item.id === id) || null;
    }

    createTask(payload) {
        const task = {
            id: `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            title: payload.title || 'Task',
            description: payload.description || '',
            reward: Number(payload.reward || 0),
            status: payload.status || 'active',
            createdAt: new Date().toISOString()
        };
        this.data.tasks.unshift(task);
        this.saveData();
        return task;
    }

    updateTask(id, partial) {
        const index = this.data.tasks.findIndex((item) => item.id === id);
        if (index === -1) return null;
        this.data.tasks[index] = { ...this.data.tasks[index], ...partial };
        this.saveData();
        return this.data.tasks[index];
    }

    getFinanceOperations() {
        return Array.isArray(this.data.financeOperations) ? this.data.financeOperations : [];
    }

    getHeroOperations() {
        return Array.isArray(this.data.heroOperations) ? this.data.heroOperations : [];
    }

    createHeroOperation(payload) {
        const operation = {
            id: this.createEntityId('heroop'),
            type: payload.type || 'hero-purchase',
            status: payload.status || 'completed',
            userId: String(payload.userId || ''),
            username: payload.username || '',
            heroId: String(payload.heroId || ''),
            heroInstanceId: String(payload.heroInstanceId || ''),
            heroName: payload.heroName || '',
            rarityKey: payload.rarityKey || 'common',
            amount: Number(payload.amount || 0),
            levelBefore: Number(payload.levelBefore || 0),
            levelAfter: Number(payload.levelAfter || 1),
            source: payload.source || 'shop',
            comment: payload.comment || '',
            createdAt: payload.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.data.heroOperations.unshift(operation);
        this.data.heroOperations = this.data.heroOperations.slice(0, 250);
        this.saveData();
        return operation;
    }

    getNotifications() {
        return Array.isArray(this.data.notifications) ? this.data.notifications : [];
    }

    createNotification(payload) {
        const notification = {
            id: `note_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            type: payload.type || 'info',
            title: payload.title || 'Notification',
            message: payload.message || '',
            audience: payload.audience || 'all',
            userId: payload.userId ? String(payload.userId) : '',
            ticketId: payload.ticketId || '',
            createdAt: payload.createdAt || new Date().toISOString(),
            readBy: Array.isArray(payload.readBy) ? payload.readBy : []
        };

        this.data.notifications.unshift(notification);
        this.data.notifications = this.data.notifications.slice(0, 250);
        this.saveData();
        return notification;
    }

    getNotificationsForUser(userId, isAdmin = false) {
        const normalizedUserId = String(userId || '');
        return this.getNotifications().filter((item) => {
            if (item.audience === 'all') return true;
            if (item.audience === 'admin') return Boolean(isAdmin);
            if (item.audience === 'user') return String(item.userId || '') === normalizedUserId;
            return false;
        });
    }

    markNotificationRead(id, actorId) {
        const normalizedActorId = String(actorId || '__current__');
        const index = this.data.notifications.findIndex((item) => item.id === id);
        if (index === -1) return null;
        const readBy = Array.isArray(this.data.notifications[index].readBy) ? this.data.notifications[index].readBy : [];
        if (!readBy.includes(normalizedActorId)) {
            this.data.notifications[index] = {
                ...this.data.notifications[index],
                readBy: [...readBy, normalizedActorId]
            };
            this.saveData();
        }
        return this.data.notifications[index];
    }

    markAllNotificationsRead(actorId, isAdmin = false) {
        const items = this.getNotificationsForUser(actorId, isAdmin);
        items.forEach((item) => this.markNotificationRead(item.id, actorId));
        return items.length;
    }

    getSupportTickets() {
        return Array.isArray(this.data.supportTickets) ? this.data.supportTickets : [];
    }

    getSupportTicketById(id) {
        return this.getSupportTickets().find((item) => item.id === id) || null;
    }

    createSupportTicket(payload) {
        const ticket = {
            id: `ticket_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            userId: String(payload.userId || ''),
            username: payload.username || '',
            userName: payload.userName || 'User',
            subject: payload.subject || 'Support request',
            category: payload.category || 'general',
            priority: payload.priority || 'normal',
            status: 'open',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            messages: [
                {
                    id: `ticket_msg_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
                    authorId: String(payload.userId || ''),
                    authorRole: payload.authorRole || 'user',
                    text: payload.message || '',
                    createdAt: new Date().toISOString()
                }
            ]
        };

        this.data.supportTickets.unshift(ticket);
        this.data.supportTickets = this.data.supportTickets.slice(0, 200);
        this.createNotification({
            type: 'support',
            title: 'Новый тикет',
            message: ticket.subject,
            audience: 'admin',
            ticketId: ticket.id
        });
        this.createAdminLog({
            type: 'support-ticket-created',
            targetUserId: ticket.userId,
            adminId: '',
            reason: ticket.subject
        });
        this.saveData();
        return ticket;
    }

    appendSupportTicketMessage(id, payload) {
        const index = this.data.supportTickets.findIndex((item) => item.id === id);
        if (index === -1) return null;

        const message = {
            id: `ticket_msg_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
            authorId: String(payload.authorId || ''),
            authorRole: payload.authorRole || 'user',
            text: payload.text || '',
            createdAt: new Date().toISOString()
        };

        const nextTicket = {
            ...this.data.supportTickets[index],
            status: payload.status || this.data.supportTickets[index].status,
            updatedAt: new Date().toISOString(),
            messages: [...(this.data.supportTickets[index].messages || []), message]
        };

        this.data.supportTickets[index] = nextTicket;

        const audience = payload.authorRole === 'admin' ? 'user' : 'admin';
        this.createNotification({
            type: 'support',
            title: payload.authorRole === 'admin' ? 'Ответ поддержки' : 'Новое сообщение в тикете',
            message: nextTicket.subject,
            audience,
            userId: nextTicket.userId,
            ticketId: nextTicket.id
        });
        this.createAdminLog({
            type: payload.authorRole === 'admin' ? 'support-ticket-replied' : 'support-ticket-updated',
            targetUserId: nextTicket.userId,
            adminId: payload.authorRole === 'admin' ? String(payload.authorId || '') : '',
            reason: nextTicket.subject
        });
        this.saveData();
        return nextTicket;
    }

    updateSupportTicket(id, partial) {
        const index = this.data.supportTickets.findIndex((item) => item.id === id);
        if (index === -1) return null;
        this.data.supportTickets[index] = {
            ...this.data.supportTickets[index],
            ...partial,
            updatedAt: new Date().toISOString()
        };

        if (partial.status) {
            this.createNotification({
                type: partial.status === 'closed' ? 'success' : 'support',
                title: partial.status === 'closed' ? 'Тикет закрыт' : 'Статус тикета изменён',
                message: this.data.supportTickets[index].subject,
                audience: 'user',
                userId: this.data.supportTickets[index].userId,
                ticketId: this.data.supportTickets[index].id
            });
            this.createAdminLog({
                type: 'support-ticket-status',
                targetUserId: this.data.supportTickets[index].userId,
                adminId: String(partial.adminId || ''),
                reason: `${this.data.supportTickets[index].subject} · ${partial.status}`
            });
        }

        this.saveData();
        return this.data.supportTickets[index];
    }

    createFinanceOperation(payload) {
        const operation = {
            id: `fin_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            type: payload.type || 'manual',
            status: payload.status || 'completed',
            userId: String(payload.userId || ''),
            username: payload.username || '',
            amount: Number(payload.amount || 0),
            method: payload.method || '',
            details: payload.details || '',
            comment: payload.comment || '',
            requestId: payload.requestId || '',
            createdAt: payload.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            resolvedAt: payload.resolvedAt || ''
        };
        this.data.financeOperations.unshift(operation);
        this.data.financeOperations = this.data.financeOperations.slice(0, 200);
        this.saveData();
        return operation;
    }

    updateFinanceOperation(id, partial) {
        const index = this.data.financeOperations.findIndex((item) => item.id === id);
        if (index === -1) return null;
        this.data.financeOperations[index] = {
            ...this.data.financeOperations[index],
            ...partial,
            updatedAt: new Date().toISOString()
        };
        this.saveData();
        return this.data.financeOperations[index];
    }

    getUserById(id) {
        const key = String(id || '');
        if (!key || key === '__current__') return this.data.user;
        if (String(this.data.user.id) === key) return this.data.user;
        return this.data.otherUsers[key] || null;
    }

    updateUserById(id, partial) {
        const key = String(id || '');
        if (!key || key === '__current__') {
            return this.updateUser(partial);
        }

        if (String(this.data.user.id) === key) {
            return this.updateUser(partial);
        }

        const current = this.getUserById(key) || this.createBaseUser({
            id: key,
            username: `@${key}`,
            name: `User ${key}`
        });
        this.data.otherUsers[key] = this.normalizeUser({ ...current, ...partial, id: key });
        this.saveData();
        return this.data.otherUsers[key];
    }

    getAllUsers() {
        return [this.data.user, ...Object.values(this.data.otherUsers || {})];
    }

    adjustBalanceById(id, amount, meta = {}) {
        let user = this.getUserById(id);
        if (!user && String(id || '')) {
            user = this.updateUserById(id, { id: String(id) });
        }
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const balanceField = meta.balanceField || 'balanceBuy';
        const currentBalance = Number(user[balanceField] || 0);
        const nextBalance = currentBalance + Number(amount || 0);
        if (nextBalance < 0) {
            return { success: false, reason: 'insufficient-balance' };
        }

        const nextStats = { ...user.stats };
        if (Number(amount) > 0 && meta.countAsDeposit) {
            nextStats.deposited = Number(nextStats.deposited || 0) + Number(amount);
        }
        if (Number(amount) < 0 && meta.countAsWithdraw) {
            nextStats.withdrawn = Number(nextStats.withdrawn || 0) + Math.abs(Number(amount));
        }

        const updatePayload = { stats: nextStats };
        updatePayload[balanceField] = nextBalance;

        const updated = this.updateUserById(id, updatePayload);

        if (!meta.skipOperation) {
            this.createFinanceOperation({
                type: meta.operationType || (Number(amount) >= 0 ? 'admin-credit' : 'admin-debit'),
                status: 'completed',
                userId: String(id),
                username: updated.username,
                amount: Math.abs(Number(amount || 0)),
                method: meta.method || 'admin',
                details: meta.details || '',
                comment: meta.reason || '',
                resolvedAt: new Date().toISOString()
            });
        }

        if (meta.adminId || meta.reason) {
            this.createAdminLog({
                type: 'balance-adjustment',
                targetUserId: String(id),
                amount: Number(amount || 0),
                reason: meta.reason || '',
                adminId: meta.adminId || '',
                createdAt: new Date().toISOString()
            });
        }

        return { success: true, user: updated };
    }

    addHeroToUser(id, hero, meta = {}) {
        let user = this.getUserById(id);
        if (!user && String(id || '')) {
            user = this.updateUserById(id, { id: String(id) });
        }
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const grantedHero = this.normalizeHero({
            ...hero,
            level: Number(meta.startLevel || hero.level || 1),
            source: meta.source || 'admin-grant',
            grantedByAdmin: true,
            purchasedAt: meta.purchasedAt || new Date().toISOString()
        });

        const nextHeroes = [...(Array.isArray(user.heroes) ? user.heroes : []), grantedHero];
        const nextStats = {
            ...user.stats,
            purchased: Number(user.stats?.purchased || 0) + 1
        };

        const updated = this.updateUserById(id, {
            heroes: nextHeroes,
            stats: nextStats
        });

        this.createAdminLog({
            type: 'hero-granted',
            targetUserId: String(id),
            heroId: grantedHero.heroId,
            heroName: grantedHero.name,
            reason: meta.reason || '',
            adminId: meta.adminId || '',
            createdAt: new Date().toISOString()
        });

        this.createHeroOperation({
            type: 'hero-grant',
            userId: String(id),
            username: updated.username,
            heroId: grantedHero.heroId,
            heroInstanceId: grantedHero.instanceId,
            heroName: grantedHero.name,
            rarityKey: grantedHero.rarityKey,
            amount: 0,
            levelBefore: 0,
            levelAfter: grantedHero.level,
            source: meta.source || 'admin-grant',
            comment: meta.reason || ''
        });

        return { success: true, user: updated, hero: grantedHero };
    }

    buyHeroForUser(id, hero, meta = {}) {
        const targetId = String(id || '__current__');
        const user = this.getUserById(targetId);
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const heroPrice = Math.max(0, Number(hero?.price || 0));
        if (!meta.skipCharge && Number(user.balanceBuy || 0) < heroPrice) {
            return { success: false, reason: 'insufficient-balance' };
        }

        const purchasedHero = this.normalizeHero({
            ...hero,
            level: Number(meta.startLevel || hero.level || 1),
            source: meta.source || 'shop',
            purchasedAt: meta.purchasedAt || new Date().toISOString()
        });

        const nextBalance = meta.skipCharge ? Number(user.balanceBuy || 0) : Math.max(0, Number(user.balanceBuy || 0) - heroPrice);
        const nextHeroes = [...(Array.isArray(user.heroes) ? user.heroes : []), purchasedHero];
        const nextStats = {
            ...user.stats,
            purchased: Number(user.stats?.purchased || 0) + 1
        };

        const updated = this.updateUserById(targetId, {
            balanceBuy: nextBalance,
            heroes: nextHeroes,
            stats: nextStats
        });

        this.createHeroOperation({
            type: meta.operationType || 'hero-purchase',
            userId: String(updated.id || user.id || ''),
            username: updated.username,
            heroId: purchasedHero.heroId,
            heroInstanceId: purchasedHero.instanceId,
            heroName: purchasedHero.name,
            rarityKey: purchasedHero.rarityKey,
            amount: heroPrice,
            levelBefore: 0,
            levelAfter: purchasedHero.level,
            source: meta.source || 'shop',
            comment: meta.reason || ''
        });

        return { success: true, user: updated, hero: purchasedHero };
    }

    levelUpHeroForUser(id, heroInstanceId, meta = {}) {
        const targetId = String(id || '__current__');
        const user = this.getUserById(targetId);
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const heroes = Array.isArray(user.heroes) ? user.heroes.map((hero) => this.normalizeHero(hero)) : [];
        const heroIndex = heroes.findIndex((hero) => String(hero.instanceId) === String(heroInstanceId));
        if (heroIndex === -1) {
            return { success: false, reason: 'hero-not-found' };
        }

        const currentHero = heroes[heroIndex];
        const upgradeCost = Math.max(0, Number(meta.overrideCost ?? currentHero.nextUpgradeCost ?? this.calculateHeroUpgradeCost(currentHero)));
        if (!meta.skipCharge && Number(user.balanceBuy || 0) < upgradeCost) {
            return { success: false, reason: 'insufficient-balance' };
        }

        const nextHero = this.normalizeHero({
            ...currentHero,
            level: Number(currentHero.level || 1) + 1,
            purchasedAt: currentHero.purchasedAt,
            acquiredAt: currentHero.acquiredAt,
            instanceId: currentHero.instanceId,
            source: currentHero.source || meta.source || 'upgrade',
            cycleStartedAt: currentHero.cycleStartedAt,
            cycleEndsAt: currentHero.cycleEndsAt,
            cyclesCompleted: currentHero.cyclesCompleted,
            lifetimeEarnings: currentHero.lifetimeEarnings,
            lastPayoutAt: currentHero.lastPayoutAt,
            totalUpgradeSpent: Number(currentHero.totalUpgradeSpent || 0) + upgradeCost
        });

        heroes[heroIndex] = nextHero;
        const nextBalance = meta.skipCharge ? Number(user.balanceBuy || 0) : Math.max(0, Number(user.balanceBuy || 0) - upgradeCost);
        const updated = this.updateUserById(targetId, {
            balanceBuy: nextBalance,
            heroes
        });

        this.createHeroOperation({
            type: 'hero-upgrade',
            userId: String(updated.id || user.id || ''),
            username: updated.username,
            heroId: nextHero.heroId,
            heroInstanceId: nextHero.instanceId,
            heroName: nextHero.name,
            rarityKey: nextHero.rarityKey,
            amount: upgradeCost,
            levelBefore: currentHero.level,
            levelAfter: nextHero.level,
            source: meta.source || 'upgrade',
            comment: meta.reason || ''
        });

        if (meta.adminId) {
            this.createAdminLog({
                type: 'hero-upgraded',
                targetUserId: String(targetId),
                heroId: nextHero.heroId,
                heroName: nextHero.name,
                adminId: String(meta.adminId || ''),
                reason: meta.reason || `lvl ${currentHero.level} -> ${nextHero.level}`,
                createdAt: new Date().toISOString()
            });
        }

        return { success: true, user: updated, hero: nextHero };
    }

    sellHeroForUser(id, heroInstanceId, meta = {}) {
        const targetId = String(id || '__current__');
        const user = this.getUserById(targetId);
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const heroes = Array.isArray(user.heroes) ? user.heroes.map((hero) => this.normalizeHero(hero)) : [];
        const heroIndex = heroes.findIndex((hero) => String(hero.instanceId) === String(heroInstanceId));
        if (heroIndex === -1) {
            return { success: false, reason: 'hero-not-found' };
        }

        const hero = heroes[heroIndex];
        const sellValue = Math.max(0, Number(meta.overrideAmount ?? hero.sellValue ?? this.calculateHeroSellValue(hero)));
        heroes.splice(heroIndex, 1);

        const updated = this.updateUserById(targetId, {
            balanceBuy: Number(user.balanceBuy || 0) + sellValue,
            heroes
        });

        this.createHeroOperation({
            type: 'hero-sell',
            userId: String(updated.id || user.id || ''),
            username: updated.username,
            heroId: hero.heroId,
            heroInstanceId: hero.instanceId,
            heroName: hero.name,
            rarityKey: hero.rarityKey,
            amount: sellValue,
            levelBefore: hero.level,
            levelAfter: 0,
            source: meta.source || 'sell',
            comment: meta.reason || ''
        });

        return { success: true, user: updated, hero, amount: sellValue };
    }

    reissueHeroForUser(id, heroInstanceId, meta = {}) {
        const targetId = String(id || '__current__');
        const user = this.getUserById(targetId);
        if (!user) {
            return { success: false, reason: 'user-not-found' };
        }

        const heroes = Array.isArray(user.heroes) ? user.heroes.map((hero) => this.normalizeHero(hero)) : [];
        const heroIndex = heroes.findIndex((hero) => String(hero.instanceId) === String(heroInstanceId));
        if (heroIndex === -1) {
            return { success: false, reason: 'hero-not-found' };
        }

        const hero = heroes[heroIndex];
        const reissueCost = Math.max(0, Number(meta.overrideAmount ?? hero.reissueCost ?? this.calculateHeroReissueCost(hero)));
        if (!meta.skipCharge && Number(user.balanceBuy || 0) < reissueCost) {
            return { success: false, reason: 'insufficient-balance' };
        }

        const now = new Date();
        const reissuedHero = this.normalizeHero({
            ...hero,
            cycleStartedAt: now.toISOString(),
            cycleEndsAt: new Date(now.getTime() + Number(hero.durationHours || 24) * 60 * 60 * 1000).toISOString(),
            source: meta.source || 'reissue'
        });
        heroes[heroIndex] = reissuedHero;

        const updated = this.updateUserById(targetId, {
            balanceBuy: meta.skipCharge ? Number(user.balanceBuy || 0) : Math.max(0, Number(user.balanceBuy || 0) - reissueCost),
            heroes
        });

        this.createHeroOperation({
            type: 'hero-reissue',
            userId: String(updated.id || user.id || ''),
            username: updated.username,
            heroId: reissuedHero.heroId,
            heroInstanceId: reissuedHero.instanceId,
            heroName: reissuedHero.name,
            rarityKey: reissuedHero.rarityKey,
            amount: reissueCost,
            levelBefore: reissuedHero.level,
            levelAfter: reissuedHero.level,
            source: meta.source || 'reissue',
            comment: meta.reason || ''
        });

        return { success: true, user: updated, hero: reissuedHero, amount: reissueCost };
    }

    getOnlineCount() {
        return Number(this.data.onlineCount || 0);
    }

    updateLastSeen(userId) {
        const now = new Date().toISOString();
        if (!userId || String(userId) === String(this.data.user.id || '')) {
            this.data.user.lastSeen = now;
            this.data.user.isOnline = true;
        } else {
            const u = this.data.otherUsers[String(userId)];
            if (u) { u.lastSeen = now; u.isOnline = true; }
        }
        this.saveData();
    }

    setUserOffline(userId) {
        const now = new Date().toISOString();
        if (!userId || String(userId) === String(this.data.user.id || '')) {
            this.data.user.lastSeen = now;
            this.data.user.isOnline = false;
        } else {
            const u = this.data.otherUsers[String(userId)];
            if (u) { u.lastSeen = now; u.isOnline = false; }
        }
        this.saveData();
    }

    getRatingLeaderboard() {
        const allUsers = this.getAllUsers();
        return allUsers
            .map((u) => ({
                id: u.id,
                name: u.name || 'User',
                username: u.username || '@user',
                score: Number(u.rating?.score || 0),
                balance: Number(u.balanceBuy || 0) + Number(u.balanceWithdraw || 0),
                heroes: Array.isArray(u.heroes) ? u.heroes.length : 0,
                level: Number(u.stats?.level || 1),
                isOnline: Boolean(u.isOnline),
                lastSeen: u.lastSeen || '',
                photoUrl: u.photoUrl || ''
            }))
            .sort((a, b) => b.score - a.score || b.balance - a.balance)
            .map((u, i) => ({ ...u, position: i + 1 }));
    }

    setOnlineCount(value) {
        this.data.onlineCount = Number(value || 0);
        this.saveData();
        return this.data.onlineCount;
    }

    changeOnlineCount(delta) {
        const cur = this.getOnlineCount();
        return this.setOnlineCount(Math.max(0, cur + Number(delta || 0)));
    }

    createRequest(payload) {
        const request = {
            id: `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            type: payload.type,
            userId: String(payload.userId || ''),
            username: payload.username || '',
            amount: Number(payload.amount || 0),
            method: payload.method || '',
            requisites: payload.requisites || '',
            comment: payload.comment || '',
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            resolvedAt: '',
            resolvedBy: '',
            resolutionComment: ''
        };
        this.data.requests.unshift(request);
        this.createFinanceOperation({
            type: request.type,
            status: 'pending',
            userId: request.userId,
            username: request.username,
            amount: request.amount,
            method: request.method,
            details: request.requisites,
            comment: request.comment,
            requestId: request.id,
            createdAt: request.createdAt
        });
        this.createNotification({
            type: request.type === 'deposit' ? 'success' : 'info',
            title: request.type === 'deposit' ? 'Заявка на пополнение' : 'Заявка на вывод',
            message: `${request.amount}`,
            audience: 'admin',
            userId: request.userId
        });
        this.saveData();
        return request;
    }

    getRequests() {
        return Array.isArray(this.data.requests) ? this.data.requests : [];
    }

    updateRequest(id, partial) {
        const index = this.data.requests.findIndex((item) => item.id === id);
        if (index === -1) return null;
        this.data.requests[index] = {
            ...this.data.requests[index],
            ...partial,
            updatedAt: new Date().toISOString()
        };
        this.saveData();
        return this.data.requests[index];
    }

    approveRequest(id, adminId, resolutionComment = '') {
        const request = this.getRequests().find((item) => item.id === id);
        if (!request || request.status !== 'pending') {
            return { success: false, reason: 'request-not-found' };
        }

        const networkFee = request.type === 'withdraw' ? this.getNetworkFee() : 0;
        const adjustment = request.type === 'deposit' ? Number(request.amount) : -(Number(request.amount) + networkFee);
        const balanceField = request.type === 'deposit' ? 'balanceBuy' : 'balanceWithdraw';
        const result = this.adjustBalanceById(request.userId, adjustment, {
            adminId,
            reason: `${request.type}-request`,
            balanceField,
            countAsDeposit: request.type === 'deposit',
            countAsWithdraw: request.type === 'withdraw',
            skipOperation: true
        });

        if (!result.success) {
            return result;
        }

        const updated = this.updateRequest(id, {
            status: 'approved',
            resolvedAt: new Date().toISOString(),
            resolvedBy: String(adminId || ''),
            resolutionComment
        });

        const operation = this.getFinanceOperations().find((item) => item.requestId === id);
        if (operation) {
            this.updateFinanceOperation(operation.id, {
                status: 'approved',
                resolvedAt: new Date().toISOString(),
                comment: resolutionComment || operation.comment
            });
        }

        this.createAdminLog({
            type: 'request-approved',
            requestId: id,
            requestType: request.type,
            targetUserId: request.userId,
            amount: request.amount,
            adminId: String(adminId || ''),
            reason: resolutionComment,
            createdAt: new Date().toISOString()
        });

        this.createNotification({
            type: 'success',
            title: request.type === 'deposit' ? 'Пополнение подтверждено' : 'Вывод подтвержден',
            message: `${request.amount}`,
            audience: 'user',
            userId: request.userId
        });

        return { success: true, request: updated };
    }

    rejectRequest(id, adminId, resolutionComment = '') {
        const request = this.getRequests().find((item) => item.id === id);
        if (!request || request.status !== 'pending') {
            return { success: false, reason: 'request-not-found' };
        }

        const updated = this.updateRequest(id, {
            status: 'rejected',
            resolvedAt: new Date().toISOString(),
            resolvedBy: String(adminId || ''),
            resolutionComment
        });

        const operation = this.getFinanceOperations().find((item) => item.requestId === id);
        if (operation) {
            this.updateFinanceOperation(operation.id, {
                status: 'rejected',
                resolvedAt: new Date().toISOString(),
                comment: resolutionComment || operation.comment
            });
        }

        this.createAdminLog({
            type: 'request-rejected',
            requestId: id,
            requestType: request.type,
            targetUserId: request.userId,
            amount: request.amount,
            adminId: String(adminId || ''),
            reason: resolutionComment,
            createdAt: new Date().toISOString()
        });

        this.createNotification({
            type: 'error',
            title: request.type === 'deposit' ? 'Пополнение отклонено' : 'Вывод отклонён',
            message: resolutionComment || `${request.amount}`,
            audience: 'user',
            userId: request.userId
        });

        return { success: true, request: updated };
    }

    createAdminLog(entry) {
        this.data.adminLog.unshift({
            id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            createdAt: new Date().toISOString(),
            adminId: '',
            ...entry
        });
        this.data.adminLog = this.data.adminLog.slice(0, 200);
        this.saveData();
    }

    getAdminLog() {
        return Array.isArray(this.data.adminLog) ? this.data.adminLog : [];
    }

    initTelegramUser(telegramUser) {
        if (telegramUser) {
            const fullName = [telegramUser.first_name, telegramUser.last_name].filter(Boolean).join(' ').trim();
            this.data.user = this.normalizeUser({
                ...this.data.user,
                id: String(telegramUser.id),
                username: telegramUser.username ? `@${telegramUser.username}` : this.data.user.username,
                name: fullName || this.data.user.name,
                photoUrl: telegramUser.photo_url || this.data.user.photoUrl || '',
                isAdmin: this.isAdmin(String(telegramUser.id)) || this.data.user.isAdmin
            });
            this.saveData();
        }
        return this.data.user;
    }

    exportData() {
        return JSON.stringify(this.data, null, 2);
    }

    importData(jsonData) {
        try {
            const importedData = JSON.parse(jsonData);
            this.data = this.normalizeData(importedData);
            this.saveData();
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    }

    getDatabaseStats() {
        const allUsers = this.getAllUsers();
        const totalUsers = allUsers.length;
        const pendingRequests = this.getRequests().filter((item) => item.status === 'pending').length;
        let totalBalance = 0;
        let totalDeposits = 0;
        let totalWithdrawals = 0;
        let totalHeroes = 0;
        let totalRnx = 0;
        let registeredToday = 0;
        const today = new Date().toISOString().slice(0, 10);

        allUsers.forEach((u) => {
            totalBalance += Number(u.balanceBuy || 0) + Number(u.balanceWithdraw || 0);
            totalDeposits += Number(u.stats?.deposited || 0);
            totalWithdrawals += Number(u.stats?.withdrawn || 0);
            totalHeroes += Array.isArray(u.heroes) ? u.heroes.length : 0;
            totalRnx += Number(u.rnxBalance || 0);
            if (u.registrationDate && u.registrationDate.slice(0, 10) === today) registeredToday++;
        });

        return {
            totalUsers,
            lastUpdated: new Date().toISOString(),
            version: '1.3.0',
            heroOperations: this.getHeroOperations().length,
            isAdmin: this.data.user.isAdmin || false,
            pendingRequests,
            onlineCount: this.getOnlineCount(),
            realOnlineCount: (() => {
                const ONLINE_MS = 5 * 60 * 1000; // 5 minutes
                const now = Date.now();
                return allUsers.filter(u => {
                    if (!u.lastSeen) return false;
                    return (now - new Date(u.lastSeen).getTime()) < ONLINE_MS;
                }).length;
            })(),
            totalBalance: totalBalance.toFixed(2),
            totalDeposits: totalDeposits.toFixed(2),
            totalWithdrawals: totalWithdrawals.toFixed(2),
            totalHeroes,
            totalRnx,
            registeredToday
        };
    }
}

window.gameDB = new GameDatabase();
