const LOCALES = {
    ru: {
        eyebrow: 'Профиль Telegram WebApp',
        gameTitle: 'TEST @PALMARON',
        heroSubtitle: 'Чистый профиль игрока с нулевым стартом, мягкой анимацией и нормальной локализацией.',
        balance: 'Баланс',
        balanceHint: 'Двойной тап обнуляет',
        rating: 'Рейтинг',
        ratingHint: 'Двойной тап обнуляет',
        profileState: 'Статус',
        profileStateHint: 'Профиль синхронизирован',
        statusNovice: 'Новичок шахты',
        profileCardTitle: 'Профиль игрока',
        profileCardSubtitle: 'Минималистичный экран с корректными данными и подготовкой под Telegram.',
        minedOre: 'Добыто руды',
        level: 'Уровень',
        purchased: 'Куплено',
        invited: 'Приглашено',
        deposited: 'Пополнено',
        withdrawn: 'Выведено',
        onlineLabel: 'Онлайн',
        admin: 'Админ-панель',
        adminHint: 'Только для ID из конфигурации',
        adminTitle: 'Управление профилем',
        totalUsers: 'Пользователей',
        lastUpdated: 'Обновлено',
        version: 'Версия',
        accessLevel: 'Доступ',
        pendingRequestsTitle: 'Очередь заявок',
        adminLogTitle: 'Журнал админки',
        financeRequestsTitle: 'Финансовые заявки',
        financeRequestsSubtitle: 'Пополнения и выводы проходят через подтверждение',
        financeSettingsTitle: 'Финансовые настройки',
        resetAll: 'Сбросить всё',
        exportData: 'Экспорт',
        shop: 'Магазин',
        mines: 'Мои герои',
        shopTitle: 'Магазин героев',
        shopSubtitle: 'Купите героев для дохода',
        profile: 'Профиль',
        tasks: 'Задания',
        menu: 'Меню',
        myHeroesTitle: 'Мои герои',
        myHeroesSubtitle: 'Купленные герои и статистика',
        myHeroesCountLabel: 'Куплено героев',
        myHeroesIncomeLabel: 'Проектируемый доход',
        usernameFallback: '@username',
        continueButton: 'Продолжить',
        accessDenied: 'Доступ запрещён. Ваш ID не добавлен в конфигурацию администратора.',
        comingSoon: 'Раздел пока в разработке.',
        balanceReset: 'Баланс обнулён.',
        ratingReset: 'Рейтинг обнулён.',
        resetDone: 'Все данные профиля сброшены.',
        exportDone: 'Файл с данными сохранён.',
        resetConfirm: 'Сбросить весь прогресс профиля?',
        accessAdmin: 'Админ',
        accessUser: 'Пользователь',
        kgShort: 'кг'
        ,
        grantLocalAdmin: 'Выдать админку (локально)',
        grantLocalAdminConfirm: 'Выдать себе права администратора локально?',
        depositPrompt: 'Новая заявка на пополнение',
        withdrawPrompt: 'Новая заявка на вывод',
        notEnough: 'Недостаточно средств',
        addedBalance: 'Баланс добавлен',
        subtractedBalance: 'Баланс уменьшен',
        requestCreated: 'Заявка создана и ожидает проверки',
        requestApproved: 'Заявка подтверждена',
        requestRejected: 'Заявка отклонена',
        noRequests: 'Заявок пока нет.',
        noAdminLog: 'Журнал пока пуст.',
        amountLabel: 'Сумма',
        methodLabel: 'Способ',
        detailsLabel: 'Реквизиты / номер кошелька',
        commentLabel: 'Комментарий',
        confirmAction: 'Подтвердить',
        cancelAction: 'Отмена',
        statusPending: 'Ожидает',
        statusApproved: 'Подтверждена',
        statusRejected: 'Отклонена',
        depositRequestTitle: 'Пополнение',
        withdrawRequestTitle: 'Вывод',
        adminAddBalanceTitle: 'Выдать баланс',
        adminSubtractBalanceTitle: 'Списать баланс',
        adminGrantHeroTitle: 'Выдать героя',
        adminOnlineTitle: 'Изменить онлайн',
        targetUserLabel: 'ID пользователя',
        targetUserPlaceholder: 'Пусто = текущий пользователь',
        heroLabel: 'Герой',
        reasonLabel: 'Причина',
        onlineCountLabel: 'Количество онлайн',
        depositButton: 'Пополнить',
        withdrawButton: 'Вывести',
        localAdminButton: 'Выдать админку (локально)',
        adminAddBalanceButton: 'Выдать баланс',
        adminSubtractBalanceButton: 'Списать баланс',
        adminGrantHeroButton: 'Выдать героя',
        adminGrantAccessTitle: 'Выдать админку',
        adminGrantAccessButton: 'Выдать админку',
        adminRevokeAccessButton: 'Снять админку',
        adminOnlineButton: 'Изменить онлайн',
        methodCard: 'Банковская карта',
        methodCrypto: 'Криптокошелек',
        methodTelegram: 'Telegram Gifts / Stars',
        grantedHero: 'Герой выдан',
        updatedOnline: 'Онлайн обновлён',
        formValidationError: 'Проверьте поля формы',
        modalSectionFinance: 'Финансовая операция',
        modalSectionAdmin: 'Админ-действие',
        modalSectionTasks: 'Управление заданиями',
        tasksTitle: 'Задания',
        tasksSubtitle: 'Активности с наградами для игроков',
        noTasks: 'Пока нет активных заданий.',
        taskReward: 'Награда',
        taskStatusActive: 'Активно',
        taskStatusHidden: 'Скрыто',
        taskTitleLabel: 'Название задания',
        taskDescriptionLabel: 'Описание',
        taskRewardLabel: 'Награда',
        addTaskTitle: 'Добавить задание',
        taskCreated: 'Задание добавлено',
        manageFinanceTitle: 'Настроить финансы',
        depositLimitsTitle: 'Пополнение',
        withdrawLimitsTitle: 'Вывод',
        minAmountLabel: 'Минимум',
        maxAmountLabel: 'Максимум',
        enabledMethodsLabel: 'Включённые методы',
        settingsSaved: 'Настройки сохранены',
        enabledLabel: 'Включено',
        disabledLabel: 'Выключено'
        ,
        historyTitle: 'История операций',
        historySubtitle: 'Финансовые операции и их статусы',
        usersTitle: 'Пользователи',
        usersSearchPlaceholder: 'ID / username / имя',
        noUsers: 'Пользователи не найдены.',
        tasksManageTitle: 'Управление заданиями',
        editProfileTitle: 'Редактировать профиль',
        editAction: 'Редактировать',
        disableAction: 'Отключить',
        enableAction: 'Включить',
        saveProfileDone: 'Профиль обновлён',
        historyFilterAll: 'Все',
        historyFilterPending: 'Ожидают',
        historyFilterApproved: 'Подтверждены',
        historyFilterRejected: 'Отклонены',
        historyFilterCompleted: 'Завершены',
        noHistory: 'Операций пока нет.',
        taskUpdated: 'Задание обновлено',
        profileNameLabel: 'Имя',
        profileUsernameLabel: 'Username',
        levelLabel: 'Уровень',
        invitedLabel: 'Приглашено',
        depositedLabel: 'Пополнено',
        withdrawnLabel: 'Выведено',
        ratingPositionLabel: 'Позиция рейтинга',
        ratingScoreLabel: 'Очки рейтинга',
        adminAccessLabel: 'Права админа',
        accessGranted: 'Админ-доступ выдан',
        accessRevoked: 'Админ-доступ снят',
        telegramIdLabel: 'ID',
        localDataWarning: 'Локальная база: права, онлайн и уведомления синхронизируются только в пределах этой клиентской копии без сервера.',
        accessGrantedLocalOnly: 'Права записаны только в локальную базу этой копии приложения. На другом телефоне без backend это не появится.',
        onlineUpdatedLocalOnly: 'Онлайн обновлён только локально в этой копии приложения. Между устройствами без backend значение не синхронизируется.'
        ,
        auditTitle: 'Аудит админки',
        auditSubtitle: 'Кто, когда и что менял',
        auditFilterAll: 'Все действия',
        auditFilterBalance: 'Баланс',
        auditFilterProfile: 'Профили',
        auditFilterTasks: 'Задания',
        auditFilterRequests: 'Заявки',
        noAuditEntries: 'Записей аудита пока нет.',
        userCardTitle: 'Карточка пользователя',
        userTabFinance: 'Финансы',
        userTabHeroes: 'Герои',
        userTabTasks: 'Задания',
        userTabHistory: 'История',
        userNoHeroes: 'У пользователя пока нет героев.',
        userNoTasks: 'У пользователя нет назначенных задач.',
        userNoHistory: 'История пользователя пуста.',
        closeAction: 'Закрыть',
        notificationsTitle: 'Уведомления',
        notificationsSubtitle: 'События, ответы и статусы',
        notificationsReadAll: 'Прочитать всё',
        noNotifications: 'Уведомлений пока нет.',
        supportTitle: 'Поддержка',
        supportSubtitle: 'Тикеты и ответы команды',
        supportButton: 'Поддержка',
        supportNewTicket: 'Создать тикет',
        supportAdminTitle: 'Тикеты поддержки',
        supportEmpty: 'Тикетов пока нет.',
        supportSubjectLabel: 'Тема',
        supportCategoryLabel: 'Категория',
        supportPriorityLabel: 'Приоритет',
        supportMessageLabel: 'Сообщение',
        supportCreateDone: 'Тикет отправлен в поддержку',
        supportReplyAction: 'Ответить',
        supportCloseAction: 'Закрыть тикет',
        supportReopenAction: 'Переоткрыть',
        supportOpenStatus: 'Открыт',
        supportProgressStatus: 'В работе',
        supportClosedStatus: 'Закрыт',
        supportCategoryGeneral: 'Общее',
        supportCategoryFinance: 'Финансы',
        supportCategoryBug: 'Ошибка',
        supportCategoryPartner: 'Партнёрка',
        supportPriorityLow: 'Низкий',
        supportPriorityNormal: 'Обычный',
        supportPriorityHigh: 'Высокий',
        supportReplyTitle: 'Ответ по тикету',
        supportReplyDone: 'Ответ отправлен',
        supportStatusDone: 'Статус тикета обновлён',
        balanceBuyLabel: 'Баланс покупки',
        balanceWithdrawLabel: 'Баланс вывода',
        rnxBalanceLabel: 'Баланс $RNX',
        exchangeTitle: 'Обмен $RNX → TON',
        exchangeButton: 'Обменять',
        exchangeSuccess: 'Обмен выполнен',
        exchangeAmountLabel: 'Сумма $RNX',
        exchangeHint: '50% на баланс покупки, 50% на баланс вывода',
        exchangeRate: 'Курс: 10 000 $RNX = 1 TON',
        insufficientRnx: 'Недостаточно $RNX',
        referralTitle: 'Реферальная программа',
        referralSubtitle: '3-уровневая реферальная система',
        referralCodeLabel: 'Ваш реферальный код',
        referralCopyBtn: 'Скопировать',
        referralCopied: 'Скопировано',
        referralStatsTitle: 'Статистика рефералов',
        referralCountLabel: 'Приглашено',
        referralEarningsLabel: 'Заработано',
        referralLevelsTitle: 'Уровни',
        referralLevel: 'Уровень',
        referralFixedReward: 'Фикс. награда',
        promoTitle: 'Промокод',
        promoSubtitle: 'Введите промокод для получения награды',
        promoInputLabel: 'Промокод',
        promoActivateBtn: 'Активировать',
        promoSuccess: 'Промокод активирован',
        promoNotFound: 'Промокод не найден',
        promoAlreadyUsed: 'Промокод уже использован',
        promoExpired: 'Промокод исчерпан',
        adminCreatePromoTitle: 'Создать промокод',
        adminCreatePromoBtn: 'Создать промокод',
        promoCodeLabel: 'Код',
        promoRewardRnxLabel: 'Награда $RNX',
        promoRewardTonLabel: 'Награда TON',
        promoMaxUsesLabel: 'Макс. использований',
        promoCreated: 'Промокод создан',
        tonLabel: 'TON',
        networkFeeLabel: 'Комиссия сети',
        methodTon: 'TON',
        methodUsdtBep20: 'USDT BEP-20',
        methodUsdtTrc20: 'USDT TRC-20',
        methodTronTrx: 'TRON-TRX'
    },
    ua: {
        eyebrow: 'Профіль Telegram WebApp',
        gameTitle: 'TEST @PALMARON',
        heroSubtitle: 'Чистий профіль гравця з нульовим стартом, мʼякою анімацією та нормальною локалізацією.',
        balance: 'Баланс',
        balanceHint: 'Подвійний тап скидає',
        rating: 'Рейтинг',
        ratingHint: 'Подвійний тап скидає',
        profileState: 'Статус',
        profileStateHint: 'Профіль синхронізовано',
        statusNovice: 'Новачок шахти',
        profileCardTitle: 'Профіль гравця',
        profileCardSubtitle: 'Мінімалістичний екран з коректними даними та підготовкою під Telegram.',
        minedOre: 'Видобуто руди',
        level: 'Рівень',
        purchased: 'Куплено',
        invited: 'Запрошено',
        deposited: 'Поповнено',
        withdrawn: 'Виведено',
        onlineLabel: 'Онлайн',
        admin: 'Адмін-панель',
        adminHint: 'Лише для ID з конфігурації',
        adminTitle: 'Керування профілем',
        totalUsers: 'Користувачів',
        lastUpdated: 'Оновлено',
        version: 'Версія',
        accessLevel: 'Доступ',
        pendingRequestsTitle: 'Черга заявок',
        adminLogTitle: 'Журнал адмінки',
        financeRequestsTitle: 'Фінансові заявки',
        financeRequestsSubtitle: 'Поповнення та виведення проходять через підтвердження',
        financeSettingsTitle: 'Фінансові налаштування',
        resetAll: 'Скинути все',
        exportData: 'Експорт',
        shop: 'Магазин',
        mines: 'Мої герої',
        shopTitle: 'Магазин героїв',
        shopSubtitle: 'Купіть героїв для доходу',
        profile: 'Профіль',
        tasks: 'Завдання',
        menu: 'Меню',
        myHeroesTitle: 'Мої герої',
        myHeroesSubtitle: 'Куплені герої та статистика',
        myHeroesCountLabel: 'Куплено героїв',
        myHeroesIncomeLabel: 'Проектований дохід',
        usernameFallback: '@username',
        continueButton: 'Продовжити',
        accessDenied: 'Доступ заборонено. Ваш ID не доданий у конфігурацію адміністратора.',
        comingSoon: 'Розділ ще в розробці.',
        balanceReset: 'Баланс скинуто.',
        ratingReset: 'Рейтинг скинуто.',
        resetDone: 'Усі дані профілю скинуто.',
        exportDone: 'Файл з даними збережено.',
        resetConfirm: 'Скинути весь прогрес профілю?',
        accessAdmin: 'Адмін',
        accessUser: 'Користувач',
        kgShort: 'кг'
        ,
        grantLocalAdmin: 'Видати адмінку (локально)',
        grantLocalAdminConfirm: 'Видати собі права адміністратора локально?',
        depositPrompt: 'Нова заявка на поповнення',
        withdrawPrompt: 'Нова заявка на виведення',
        notEnough: 'Недостатньо коштів',
        addedBalance: 'Баланс додано',
        subtractedBalance: 'Баланс зменшено',
        requestCreated: 'Заявку створено та відправлено на перевірку',
        requestApproved: 'Заявку підтверджено',
        requestRejected: 'Заявку відхилено',
        noRequests: 'Заявок поки немає.',
        noAdminLog: 'Журнал поки порожній.',
        amountLabel: 'Сума',
        methodLabel: 'Спосіб',
        detailsLabel: 'Реквізити / номер гаманця',
        commentLabel: 'Коментар',
        confirmAction: 'Підтвердити',
        cancelAction: 'Скасувати',
        statusPending: 'Очікує',
        statusApproved: 'Підтверджена',
        statusRejected: 'Відхилена',
        depositRequestTitle: 'Поповнення',
        withdrawRequestTitle: 'Виведення',
        adminAddBalanceTitle: 'Видати баланс',
        adminSubtractBalanceTitle: 'Списати баланс',
        adminGrantHeroTitle: 'Видати героя',
        adminOnlineTitle: 'Змінити онлайн',
        targetUserLabel: 'ID користувача',
        targetUserPlaceholder: 'Порожньо = поточний користувач',
        heroLabel: 'Герой',
        reasonLabel: 'Причина',
        onlineCountLabel: 'Кількість онлайн',
        depositButton: 'Поповнити',
        withdrawButton: 'Вивести',
        localAdminButton: 'Видати адмінку (локально)',
        adminAddBalanceButton: 'Видати баланс',
        adminSubtractBalanceButton: 'Списати баланс',
        adminGrantHeroButton: 'Видати героя',
        adminGrantAccessTitle: 'Видати адмінку',
        adminGrantAccessButton: 'Видати адмінку',
        adminRevokeAccessButton: 'Зняти адмінку',
        adminOnlineButton: 'Змінити онлайн',
        methodCard: 'Банківська картка',
        methodCrypto: 'Криптогаманець',
        methodTelegram: 'Telegram Gifts / Stars',
        grantedHero: 'Героя видано',
        updatedOnline: 'Онлайн оновлено',
        formValidationError: 'Перевірте поля форми',
        modalSectionFinance: 'Фінансова операція',
        modalSectionAdmin: 'Дія адміністратора',
        modalSectionTasks: 'Керування завданнями',
        tasksTitle: 'Завдання',
        tasksSubtitle: 'Активності з нагородами для гравців',
        noTasks: 'Активних завдань поки немає.',
        taskReward: 'Нагорода',
        taskStatusActive: 'Активно',
        taskStatusHidden: 'Приховано',
        taskTitleLabel: 'Назва завдання',
        taskDescriptionLabel: 'Опис',
        taskRewardLabel: 'Нагорода',
        addTaskTitle: 'Додати завдання',
        taskCreated: 'Завдання додано',
        manageFinanceTitle: 'Налаштувати фінанси',
        depositLimitsTitle: 'Поповнення',
        withdrawLimitsTitle: 'Виведення',
        minAmountLabel: 'Мінімум',
        maxAmountLabel: 'Максимум',
        enabledMethodsLabel: 'Увімкнені методи',
        settingsSaved: 'Налаштування збережено',
        enabledLabel: 'Увімкнено',
        disabledLabel: 'Вимкнено'
        ,
        historyTitle: 'Історія операцій',
        historySubtitle: 'Фінансові операції та їхні статуси',
        usersTitle: 'Користувачі',
        usersSearchPlaceholder: 'ID / username / імʼя',
        noUsers: 'Користувачів не знайдено.',
        tasksManageTitle: 'Керування завданнями',
        editProfileTitle: 'Редагувати профіль',
        editAction: 'Редагувати',
        disableAction: 'Вимкнути',
        enableAction: 'Увімкнути',
        saveProfileDone: 'Профіль оновлено',
        historyFilterAll: 'Усі',
        historyFilterPending: 'Очікують',
        historyFilterApproved: 'Підтверджені',
        historyFilterRejected: 'Відхилені',
        historyFilterCompleted: 'Завершені',
        noHistory: 'Операцій поки немає.',
        taskUpdated: 'Завдання оновлено',
        profileNameLabel: 'Імʼя',
        profileUsernameLabel: 'Username',
        levelLabel: 'Рівень',
        invitedLabel: 'Запрошено',
        depositedLabel: 'Поповнено',
        withdrawnLabel: 'Виведено',
        ratingPositionLabel: 'Позиція рейтингу',
        ratingScoreLabel: 'Очки рейтингу',
        adminAccessLabel: 'Права адміна',
        accessGranted: 'Адмін-доступ видано',
        accessRevoked: 'Адмін-доступ знято',
        telegramIdLabel: 'ID',
        localDataWarning: 'Локальна база: права, онлайн і сповіщення синхронізуються лише в межах цієї клієнтської копії без сервера.',
        accessGrantedLocalOnly: 'Права записані лише в локальну базу цієї копії застосунку. На іншому телефоні без backend це не зʼявиться.',
        onlineUpdatedLocalOnly: 'Онлайн оновлено лише локально в цій копії застосунку. Між пристроями без backend значення не синхронізується.'
        ,
        auditTitle: 'Аудит адмінки',
        auditSubtitle: 'Хто, коли і що змінював',
        auditFilterAll: 'Усі дії',
        auditFilterBalance: 'Баланс',
        auditFilterProfile: 'Профілі',
        auditFilterTasks: 'Завдання',
        auditFilterRequests: 'Заявки',
        noAuditEntries: 'Записів аудиту поки немає.',
        userCardTitle: 'Картка користувача',
        userTabFinance: 'Фінанси',
        userTabHeroes: 'Герої',
        userTabTasks: 'Завдання',
        userTabHistory: 'Історія',
        userNoHeroes: 'У користувача поки немає героїв.',
        userNoTasks: 'У користувача немає призначених завдань.',
        userNoHistory: 'Історія користувача порожня.',
        closeAction: 'Закрити',
        notificationsTitle: 'Сповіщення',
        notificationsSubtitle: 'Події, відповіді та статуси',
        notificationsReadAll: 'Прочитати все',
        noNotifications: 'Сповіщень поки немає.',
        supportTitle: 'Підтримка',
        supportSubtitle: 'Тікети та відповіді команди',
        supportButton: 'Підтримка',
        supportNewTicket: 'Створити тікет',
        supportAdminTitle: 'Тікети підтримки',
        supportEmpty: 'Тікетів поки немає.',
        supportSubjectLabel: 'Тема',
        supportCategoryLabel: 'Категорія',
        supportPriorityLabel: 'Пріоритет',
        supportMessageLabel: 'Повідомлення',
        supportCreateDone: 'Тікет відправлено в підтримку',
        supportReplyAction: 'Відповісти',
        supportCloseAction: 'Закрити тікет',
        supportReopenAction: 'Перевідкрити',
        supportOpenStatus: 'Відкрито',
        supportProgressStatus: 'В роботі',
        supportClosedStatus: 'Закрито',
        supportCategoryGeneral: 'Загальне',
        supportCategoryFinance: 'Фінанси',
        supportCategoryBug: 'Помилка',
        supportCategoryPartner: 'Партнерка',
        supportPriorityLow: 'Низький',
        supportPriorityNormal: 'Звичайний',
        supportPriorityHigh: 'Високий',
        supportReplyTitle: 'Відповідь по тікету',
        supportReplyDone: 'Відповідь відправлено',
        supportStatusDone: 'Статус тікета оновлено',
        balanceBuyLabel: 'Баланс покупки',
        balanceWithdrawLabel: 'Баланс виведення',
        rnxBalanceLabel: 'Баланс $RNX',
        exchangeTitle: 'Обмін $RNX → TON',
        exchangeButton: 'Обміняти',
        exchangeSuccess: 'Обмін виконано',
        exchangeAmountLabel: 'Сума $RNX',
        exchangeHint: '50% на баланс покупки, 50% на баланс виведення',
        exchangeRate: 'Курс: 10 000 $RNX = 1 TON',
        insufficientRnx: 'Недостатньо $RNX',
        referralTitle: 'Реферальна програма',
        referralSubtitle: '3-рівнева реферальна система',
        referralCodeLabel: 'Ваш реферальний код',
        referralCopyBtn: 'Скопіювати',
        referralCopied: 'Скопійовано',
        referralStatsTitle: 'Статистика рефералів',
        referralCountLabel: 'Запрошено',
        referralEarningsLabel: 'Зароблено',
        referralLevelsTitle: 'Рівні',
        referralLevel: 'Рівень',
        referralFixedReward: 'Фікс. нагорода',
        promoTitle: 'Промокод',
        promoSubtitle: 'Введіть промокод для отримання нагороди',
        promoInputLabel: 'Промокод',
        promoActivateBtn: 'Активувати',
        promoSuccess: 'Промокод активовано',
        promoNotFound: 'Промокод не знайдено',
        promoAlreadyUsed: 'Промокод вже використано',
        promoExpired: 'Промокод вичерпано',
        adminCreatePromoTitle: 'Створити промокод',
        adminCreatePromoBtn: 'Створити промокод',
        promoCodeLabel: 'Код',
        promoRewardRnxLabel: 'Нагорода $RNX',
        promoRewardTonLabel: 'Нагорода TON',
        promoMaxUsesLabel: 'Макс. використань',
        promoCreated: 'Промокод створено',
        tonLabel: 'TON',
        networkFeeLabel: 'Комісія мережі',
        methodTon: 'TON',
        methodUsdtBep20: 'USDT BEP-20',
        methodUsdtTrc20: 'USDT TRC-20',
        methodTronTrx: 'TRON-TRX'
    },
    };

const LANGUAGE_TO_LOCALE = {
    ru: 'ru-RU',
    ua: 'uk-UA',
};

const APP_STATE = {
    historyFilter: 'all',
    auditFilter: 'all',
    adminUserSearch: '',
    selectedUserId: '',
    selectedUserTab: 'finance',
    selectedSupportTicketId: '',
    notificationsOnlyUnread: false,
    heroShopFilter: 'all',
    selectedShopHeroId: '',
    selectedHeroInstanceId: '',
    adminTab: 'overview'
};

document.addEventListener('DOMContentLoaded', async () => {
    createParticles();

    if (window.gameDB) {
        await normalizeUserData();
    }

    initializeTelegramWebApp();
    initializeLanguageSystem();
    initializeInteractions();
    renderApp();

    // Dismiss splash screen
    requestAnimationFrame(() => {
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.classList.add('splash-exit');
                splash.addEventListener('animationend', () => {
                    splash.remove();
                }, { once: true });
            }
            const shell = document.getElementById('app-shell');
            if (shell) shell.classList.add('app-revealed');
        }, 1200);
    });

    window.addEventListener('storage', (event) => {
        if (event.key !== 'gameData' || !window.gameDB) return;
        window.gameDB.loadData();
        renderApp();
    });
    window.setInterval(() => {
        if (processHeroEconomy()) {
            renderApp();
            return;
        }
        renderHeroTimersOnly();
    }, 1000);
});

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) {
        return;
    }

    particlesContainer.innerHTML = '';

    for (let index = 0; index < 16; index += 1) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;

        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${Math.random() * 90 + 90}px`;
        particle.style.animationDuration = `${Math.random() * 10 + 14}s`;
        particle.style.animationDelay = `${Math.random() * 8}s`;

        particlesContainer.appendChild(particle);
    }
}

function initializeTelegramWebApp() {
    if (!window.Telegram || !window.Telegram.WebApp) {
        return;
    }

    const tg = window.Telegram.WebApp;
    document.body.classList.add('telegram-webapp');
    tg.ready();
    tg.expand();
    if (typeof tg.isVersionAtLeast === 'function' && tg.isVersionAtLeast('6.1')) {
        tg.setHeaderColor('#0e1625');
        tg.setBackgroundColor('#08111f');
    }

    if (tg.initDataUnsafe && tg.initDataUnsafe.user && window.gameDB) {
        window.gameDB.initTelegramUser(tg.initDataUnsafe.user);
    }

    const language = getCurrentLanguage();
    if (tg.MainButton) {
        if (typeof tg.MainButton.hide === 'function') {
            tg.MainButton.hide();
        }
    }
}

async function normalizeUserData() {
    const user = window.gameDB.getUser();
    const isAdmin = Boolean(user.id) && window.gameDB.isAdmin(String(user.id));
    window.gameDB.updateUser({
        id: user.id,
        username: user.username,
        name: user.name,
        registrationDate: user.registrationDate,
        isAdmin
    });
}

function initializeLanguageSystem() {
    const trigger = document.getElementById('language-trigger');
    const dropdown = document.getElementById('language-dropdown');
    const currentValue = document.getElementById('language-current');
    const options = document.querySelectorAll('.language-option');
    const settings = window.gameDB ? window.gameDB.getSettings() : { language: 'ru' };
    const activeLanguage = settings.language || 'ru';

    if (currentValue) {
        currentValue.textContent = activeLanguage.toUpperCase();
    }

    const closeLanguageDropdown = () => {
        if (dropdown) dropdown.classList.add('hidden');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
    };

    if (trigger && dropdown) {
        trigger.addEventListener('click', () => {
            const willOpen = dropdown.classList.contains('hidden');
            dropdown.classList.toggle('hidden', !willOpen);
            trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        });

        document.addEventListener('click', (event) => {
            const menu = document.getElementById('language-menu');
            if (menu && !menu.contains(event.target)) {
                closeLanguageDropdown();
            }
        });
    }

    options.forEach((option) => {
        option.classList.toggle('active', option.dataset.language === activeLanguage);
        option.addEventListener('click', () => {
            const nextLanguage = option.dataset.language;

            if (!LOCALES[nextLanguage]) {
                return;
            }

            window.gameDB.updateSettings({ language: nextLanguage });
            if (currentValue) currentValue.textContent = nextLanguage.toUpperCase();
            closeLanguageDropdown();
            renderApp();
            triggerHaptic('light');
        });
    });
}

function initializeInteractions() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const adminButton = document.getElementById('admin-btn');
    const adminModal = document.getElementById('admin-modal');
    const closeAdminModalButton = document.getElementById('close-admin-modal');
    const resetAllButton = document.getElementById('reset-all-btn');
    const exportDataButton = document.getElementById('export-data-btn');
    const balanceCard = document.getElementById('balance-card');
    const ratingCard = document.getElementById('rating-card');
    const adminOpenAuditBtn = document.getElementById('admin-open-audit');
    const adminUserSearch = document.getElementById('admin-user-search');
    const formModal = document.getElementById('form-modal');
    const formModalClose = document.getElementById('form-modal-close');
    const formModalCancel = document.getElementById('form-modal-cancel');
    const userDetailModal = document.getElementById('user-detail-modal');
    const userDetailClose = document.getElementById('user-detail-close');
    const userDetailCancel = document.getElementById('user-detail-cancel');
    const userDetailEdit = document.getElementById('user-detail-edit');
    const notificationsFab = document.getElementById('notifications-fab');
    const supportFab = document.getElementById('support-fab');
    const notificationsModal = document.getElementById('notifications-modal');
    const notificationsModalClose = document.getElementById('notifications-modal-close');
    const notificationsReadAll = document.getElementById('notifications-read-all');
    const supportModal = document.getElementById('support-modal');
    const supportModalClose = document.getElementById('support-modal-close');
    const supportNewTicket = document.getElementById('support-new-ticket');
    const heroDetailModal = document.getElementById('hero-detail-modal');
    const heroDetailClose = document.getElementById('hero-detail-close');
    const heroDetailCancel = document.getElementById('hero-detail-cancel');
    const heroDetailUpgrade = document.getElementById('hero-detail-upgrade');
    const heroDetailSell = document.getElementById('hero-detail-sell');
    const heroDetailReissue = document.getElementById('hero-detail-reissue');
    const adminTabs = document.getElementById('admin-tabs');

    navButtons.forEach((button) => {
        button.addEventListener('click', () => {
            setActiveNavButton(button.dataset.nav);
            triggerHaptic('light');
            handleNavigation(button.dataset.nav);
        });
    });

    if (adminButton) {
        adminButton.addEventListener('click', () => {
            const user = window.gameDB.getUser();
            if (!user.isAdmin) {
                showNotification(getTranslations().accessDenied, 'error');
                return;
            }

            populateAdminModal();
            adminModal.classList.remove('hidden');
            syncModalState();
            triggerHaptic('medium');
        });
    }

    if (closeAdminModalButton) {
        closeAdminModalButton.addEventListener('click', closeAdminModal);
    }

    if (adminModal) {
        adminModal.addEventListener('click', (event) => {
            if (event.target === adminModal) {
                closeAdminModal();
            }
        });
    }

    if (resetAllButton) {
        resetAllButton.addEventListener('click', () => {
            const t = getTranslations();
            if (!window.confirm(t.resetConfirm)) {
                return;
            }

            normalizeUserData().then(() => {
                renderApp();
                closeAdminModal();
                showNotification(t.resetDone, 'success');
            });
        });
    }

    if (exportDataButton) {
        exportDataButton.addEventListener('click', exportData);
    }

    if (balanceCard) {
        balanceCard.addEventListener('dblclick', () => {
            const balance = window.gameDB.getUser().balance;
            window.gameDB.updateBalance(-balance);
            renderApp();
            triggerHaptic('heavy');
            showNotification(getTranslations().balanceReset, 'success');
        });
    }

    if (ratingCard) {
        ratingCard.addEventListener('dblclick', () => {
            window.gameDB.updateRating(0, 0);
            renderApp();
            triggerHaptic('heavy');
            showNotification(getTranslations().ratingReset, 'success');
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAdminModal();
            closeFormModal();
            closeUserDetailModal();
            closeHeroDetailModal();
            closeNotificationsModal();
            closeSupportModal();
        }
    });

    const localAdminBtn = document.getElementById('local-admin-btn');
    if (localAdminBtn) {
        const hostname = window.location.hostname;
        const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || window.location.protocol === 'file:';
        if (isLocal) {
            localAdminBtn.classList.remove('hidden');
            localAdminBtn.addEventListener('click', () => {
                const t = getTranslations();
                if (!window.confirm(t.grantLocalAdminConfirm)) return;
                const user = window.gameDB.getUser();
                window.gameDB.updateUser({ ...user, isAdmin: true });
                renderApp();
                showNotification('Админка выдана локально', 'success');
            });
        }
    }

    if (formModalClose) formModalClose.addEventListener('click', closeFormModal);
    if (formModalCancel) formModalCancel.addEventListener('click', closeFormModal);
    if (formModal) {
        formModal.addEventListener('click', (event) => {
            if (event.target === formModal) {
                closeFormModal();
            }
        });
    }

    if (userDetailClose) userDetailClose.addEventListener('click', closeUserDetailModal);
    if (userDetailCancel) userDetailCancel.addEventListener('click', closeUserDetailModal);
    if (userDetailModal) {
        userDetailModal.addEventListener('click', (event) => {
            if (event.target === userDetailModal) {
                closeUserDetailModal();
            }
        });
    }
    if (userDetailEdit) {
        userDetailEdit.addEventListener('click', () => {
            if (APP_STATE.selectedUserId) {
                openEditUserModal(APP_STATE.selectedUserId);
            }
        });
    }

    if (notificationsFab) notificationsFab.addEventListener('click', openNotificationsModal);
    if (supportFab) supportFab.addEventListener('click', openSupportModal);
    if (notificationsModalClose) notificationsModalClose.addEventListener('click', closeNotificationsModal);
    if (supportModalClose) supportModalClose.addEventListener('click', closeSupportModal);
    if (notificationsReadAll) {
        notificationsReadAll.addEventListener('click', () => {
            const user = window.gameDB.getUser();
            window.gameDB.markAllNotificationsRead(getActorId(), Boolean(user.isAdmin));
            renderApp();
        });
    }
    if (supportNewTicket) supportNewTicket.addEventListener('click', openSupportCreateModal);
    if (notificationsModal) {
        notificationsModal.addEventListener('click', (event) => {
            if (event.target === notificationsModal) closeNotificationsModal();
        });
    }
    if (supportModal) {
        supportModal.addEventListener('click', (event) => {
            if (event.target === supportModal) closeSupportModal();
        });
    }
    if (heroDetailClose) heroDetailClose.addEventListener('click', closeHeroDetailModal);
    if (heroDetailCancel) heroDetailCancel.addEventListener('click', closeHeroDetailModal);
    if (heroDetailModal) {
        heroDetailModal.addEventListener('click', (event) => {
            if (event.target === heroDetailModal) closeHeroDetailModal();
        });
    }
    if (heroDetailUpgrade) heroDetailUpgrade.addEventListener('click', () => APP_STATE.selectedHeroInstanceId && upgradeHero(APP_STATE.selectedHeroInstanceId));
    if (heroDetailSell) heroDetailSell.addEventListener('click', () => APP_STATE.selectedHeroInstanceId && sellHero(APP_STATE.selectedHeroInstanceId));
    if (heroDetailReissue) heroDetailReissue.addEventListener('click', () => APP_STATE.selectedHeroInstanceId && reissueHero(APP_STATE.selectedHeroInstanceId));
    if (adminTabs) {
        adminTabs.addEventListener('click', (event) => {
            const target = event.target.closest('[data-admin-tab]');
            if (!target) return;
            APP_STATE.adminTab = target.dataset.adminTab;
            renderAdminTabState();
        });
    }

    window.openFormModal = function openFormModal({ title = 'Form', sectionLabel, fields = [], confirmText, cancelText, onConfirm = () => {} }) {
        const modal = document.getElementById('form-modal');
        const body = document.getElementById('form-modal-body');
        const titleEl = document.getElementById('form-modal-title');
        const labelEl = document.getElementById('form-modal-label');
        const confirmBtn = document.getElementById('form-modal-confirm');
        const cancelBtn = document.getElementById('form-modal-cancel');
        const t = getTranslations();

        if (!modal || !body || !titleEl || !confirmBtn || !cancelBtn || !labelEl) return;

        titleEl.textContent = title;
        labelEl.textContent = sectionLabel || t.modalSectionFinance;
        confirmBtn.textContent = confirmText || t.confirmAction;
        cancelBtn.textContent = cancelText || t.cancelAction;
        body.innerHTML = '';

        fields.forEach((field) => {
            const wrap = document.createElement('div');
            wrap.className = 'form-field';

            const label = document.createElement('label');
            label.textContent = field.label;
            wrap.appendChild(label);

            let input;
            if (field.type === 'select') {
                input = document.createElement('select');
                (field.options || []).forEach((option) => {
                    const optionEl = document.createElement('option');
                    optionEl.value = option.value;
                    optionEl.textContent = option.label;
                    if (field.value === option.value) optionEl.selected = true;
                    input.appendChild(optionEl);
                });
            } else if (field.type === 'textarea') {
                input = document.createElement('textarea');
                input.rows = field.rows || 3;
                input.value = field.value || '';
            } else {
                input = document.createElement('input');
                input.type = field.type || 'text';
                if (field.value !== undefined) input.value = field.value;
            }

            input.id = `form-field-${field.name}`;
            input.placeholder = field.placeholder || '';
            wrap.appendChild(input);
            body.appendChild(wrap);
        });

        confirmBtn.onclick = () => {
            const values = {};
            let valid = true;

            fields.forEach((field) => {
                const el = document.getElementById(`form-field-${field.name}`);
                let value = el ? el.value : '';
                if (field.type === 'number') value = Number(value);
                if (field.required && (value === '' || value === null || Number.isNaN(value))) {
                    valid = false;
                }
                values[field.name] = value;
            });

            if (!valid) {
                showNotification(t.formValidationError, 'error');
                return;
            }

            closeFormModal();
            onConfirm(values);
        };

        modal.classList.remove('hidden');
        syncModalState();
    };

    const depositBtn = document.getElementById('deposit-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');
    const exchangeBtn = document.getElementById('exchange-btn');
    if (depositBtn) depositBtn.addEventListener('click', () => openFinanceRequestModal('deposit'));
    if (withdrawBtn) withdrawBtn.addEventListener('click', () => openFinanceRequestModal('withdraw'));
    if (exchangeBtn) exchangeBtn.addEventListener('click', () => openExchangeModal());

    const adminAddBtn = document.getElementById('admin-add-balance');
    const adminSubBtn = document.getElementById('admin-subtract-balance');
    const adminGrantHeroBtn = document.getElementById('admin-grant-hero');
    const adminGrantAccessBtn = document.getElementById('admin-grant-access');
    const adminOnlineBtn = document.getElementById('admin-online-edit');
    const adminFinanceSettingsBtn = document.getElementById('admin-finance-settings');
    const adminAddTaskBtn = document.getElementById('admin-add-task');

    if (adminAddBtn) adminAddBtn.addEventListener('click', () => openAdminBalanceModal('add'));
    if (adminSubBtn) adminSubBtn.addEventListener('click', () => openAdminBalanceModal('subtract'));
    if (adminGrantHeroBtn) adminGrantHeroBtn.addEventListener('click', openGrantHeroModal);
    if (adminGrantAccessBtn) adminGrantAccessBtn.addEventListener('click', () => openAdminAccessModal());
    if (adminOnlineBtn) adminOnlineBtn.addEventListener('click', openOnlineEditModal);
    if (adminFinanceSettingsBtn) adminFinanceSettingsBtn.addEventListener('click', openFinanceSettingsModal);
    if (adminAddTaskBtn) adminAddTaskBtn.addEventListener('click', openAddTaskModal);
    if (adminOpenAuditBtn) adminOpenAuditBtn.addEventListener('click', openAuditScreen);
    const adminCreatePromoBtn = document.getElementById('admin-create-promo');
    if (adminCreatePromoBtn) adminCreatePromoBtn.addEventListener('click', openAdminCreatePromoModal);
    if (adminUserSearch) {
        adminUserSearch.addEventListener('input', (event) => {
            APP_STATE.adminUserSearch = String(event.target.value || '').trim().toLowerCase();
            renderAdminUsersList();
        });
    }
}

function renderApp() {
    processHeroEconomy();
    const language = getCurrentLanguage();
    const t = getTranslations(language);
    const user = window.gameDB.getUser();
    const locale = LANGUAGE_TO_LOCALE[language] || 'ru-RU';

    document.documentElement.lang = language === 'ua' ? 'uk' : language;

    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.dataset.translate;
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    const languageCurrent = document.getElementById('language-current');
    if (languageCurrent) {
        languageCurrent.textContent = language.toUpperCase();
    }
    document.querySelectorAll('.language-option').forEach((option) => {
        option.classList.toggle('active', option.dataset.language === language);
    });

    const name = user.name || 'User';
    const username = user.username || t.usernameFallback;
    const telegramUserId = String(user.id || window.Telegram?.WebApp?.initDataUnsafe?.user?.id || '');
    const initials = getInitials(name, username);

    setText('balance-value', `${formatNumber(user.balanceBuy, locale)} TON`);
    setText('rating-value', `#${formatNumber(user.rating.position, locale)} · ${formatNumber(user.rating.score, locale)}`);
    setText('balance-buy-value', `${Number(user.balanceBuy || 0).toFixed(2)} TON`);
    setText('balance-withdraw-value', `${Number(user.balanceWithdraw || 0).toFixed(2)} TON`);
    setText('rnx-balance-value', `${formatNumber(user.rnxBalance, locale)} $RNX`);
    setText('user-name', name);
    setText('hero-header-name', username);
    setText('username-data', username);
    setText('telegram-id', `${t.telegramIdLabel}: ${telegramUserId || '-'}`);
    setText('registration-data', formatRegistrationDate(user.registrationDate, locale));
    setText('mined-data', `${formatNumber(user.stats.minedOre, locale)} ${t.kgShort}`);
    setText('level-data', formatNumber(user.stats.level, locale));
    setText('purchased-data', formatNumber(user.stats.purchased, locale));
    setText('invited-data', formatNumber(user.stats.invited, locale));
    setText('deposited-data', `${Number(user.stats.deposited || 0).toFixed(2)} TON`);
    setText('withdrawn-data', `${Number(user.stats.withdrawn || 0).toFixed(2)} TON`);
    setText('avatar-initials', initials);
    setText('deposit-btn', t.depositButton);
    setText('withdraw-btn', t.withdrawButton);
    setText('exchange-btn', `${t.exchangeButton} $RNX`);
    setText('local-admin-btn', t.localAdminButton);
    setText('admin-add-balance', t.adminAddBalanceButton);
    setText('admin-subtract-balance', t.adminSubtractBalanceButton);
    setText('admin-grant-hero', t.adminGrantHeroButton);
    setText('admin-grant-access', t.adminGrantAccessButton);
    setText('admin-online-edit', t.adminOnlineButton);
    setText('admin-finance-settings', t.manageFinanceTitle);
    setText('admin-add-task', t.addTaskTitle);
    setText('admin-create-promo', t.adminCreatePromoBtn);
    setText('admin-open-audit', t.auditTitle);
    setText('admin-sim-note', t.localDataWarning);
    setText('user-detail-cancel', t.closeAction);
    setText('user-detail-edit', t.editAction);
    setText('notifications-modal-label', t.notificationsTitle);
    setText('notifications-modal-title', t.notificationsSubtitle);
    setText('notifications-read-all', t.notificationsReadAll);
    setText('support-modal-label', t.supportTitle);
    setText('support-modal-title', t.supportSubtitle);
    setText('support-new-ticket', t.supportNewTicket);
    setText('support-admin-title', t.supportAdminTitle);
    setText('my-heroes-bonus-label', language === 'ua' ? 'Бонус колекції' : 'Бонус коллекции');
    setText('my-heroes-next-label', language === 'ua' ? 'Наступний цикл' : 'Следующий цикл');
    setText('hero-detail-label', language === 'ua' ? 'Герой' : 'Герой');
    setText('hero-detail-title', language === 'ua' ? 'Профіль героя' : 'Профиль героя');
    setText('hero-detail-cancel', t.closeAction);
    const adminUserSearch = document.getElementById('admin-user-search');
    if (adminUserSearch) {
        adminUserSearch.placeholder = t.usersSearchPlaceholder;
        adminUserSearch.value = APP_STATE.adminUserSearch;
    }

    const adminSection = document.getElementById('admin-section');
    if (adminSection) {
        adminSection.classList.toggle('hidden', !user.isAdmin);
    }

    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        if (tg.MainButton && typeof tg.MainButton.hide === 'function') {
            tg.MainButton.hide();
        }
    }

    if (window.gameDB && typeof window.gameDB.getOnlineCount === 'function') {
        const onlineEl = document.getElementById('online-value');
        if (onlineEl) onlineEl.textContent = String(window.gameDB.getOnlineCount() || 0);
    }

    renderUserRequests();
    renderTasks();
    renderHistorySection();
    renderAuditSection();
    renderMenuDashboard();
    renderNotificationsCenter();
    renderSupportCenter();
    renderHeroDetailModal();
    renderReferralSection();
    renderPromoSection();

    populateAdminModal();
    renderAdminTabState();
    renderUserDetailModal();
}

function getActorId() {
    const user = window.gameDB.getUser();
    return String(user.id || '__current__');
}

function openNotificationsModal() {
    const modal = document.getElementById('notifications-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
    syncModalState();
}

function closeNotificationsModal() {
    const modal = document.getElementById('notifications-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    syncModalState();
}

function openSupportModal() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
    syncModalState();
}

function closeSupportModal() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    syncModalState();
}

function getNotificationIcon(type) {
    if (type === 'success') return '✓';
    if (type === 'error') return '!';
    if (type === 'support') return '✦';
    return '◔';
}

function renderNotificationsCenter() {
    const container = document.getElementById('notifications-list');
    const badge = document.getElementById('notifications-badge');
    if (!container || !window.gameDB) return;

    const t = getTranslations();
    const user = window.gameDB.getUser();
    const actorId = getActorId();
    const notifications = window.gameDB.getNotificationsForUser(actorId, Boolean(user.isAdmin));
    const unread = notifications.filter((item) => !(Array.isArray(item.readBy) ? item.readBy : []).includes(actorId));

    if (badge) {
        badge.textContent = String(unread.length);
        badge.classList.toggle('hidden', unread.length === 0);
    }

    container.innerHTML = '';
    if (!notifications.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noNotifications;
        container.appendChild(empty);
        return;
    }

    notifications.slice(0, 20).forEach((item) => {
        const isRead = (Array.isArray(item.readBy) ? item.readBy : []).includes(actorId);
        const card = document.createElement('div');
        card.className = `notification-card${isRead ? '' : ' unread'}`;
        card.innerHTML = `
            <div class="notification-head">
                <div>
                    <div class="notification-title">${item.title || t.notificationsTitle}</div>
                    <div class="notification-meta">${item.message || '-'}</div>
                </div>
                <span class="status-chip ${item.type === 'error' ? 'rejected' : item.type === 'success' ? 'approved' : 'pending'}">${getNotificationIcon(item.type)}</span>
            </div>
            <div class="notification-meta">${formatRegistrationDate(item.createdAt, LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU')}</div>
        `;

        card.addEventListener('click', () => {
            window.gameDB.markNotificationRead(item.id, actorId);
            if (item.ticketId) {
                openSupportModal();
            }
            renderApp();
        });
        container.appendChild(card);
    });
}

function getSupportStatusLabel(status, t = getTranslations()) {
    if (status === 'closed') return t.supportClosedStatus;
    if (status === 'in_progress') return t.supportProgressStatus;
    return t.supportOpenStatus;
}

function getSupportCategoryLabel(category, t = getTranslations()) {
    const map = {
        general: t.supportCategoryGeneral,
        finance: t.supportCategoryFinance,
        bug: t.supportCategoryBug,
        partner: t.supportCategoryPartner
    };
    return map[category] || category;
}

function getSupportPriorityLabel(priority, t = getTranslations()) {
    const map = {
        low: t.supportPriorityLow,
        normal: t.supportPriorityNormal,
        high: t.supportPriorityHigh
    };
    return map[priority] || priority;
}

function createSupportTicketCard(ticket, options = {}) {
    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const card = document.createElement('div');
    card.className = 'support-ticket-card';
    card.innerHTML = `
        <div class="support-ticket-head">
            <div>
                <div class="support-ticket-title">${ticket.subject}</div>
                <div class="support-ticket-meta">${ticket.userName || 'User'} · ${ticket.username || '@user'} · ID ${ticket.userId || '-'}</div>
            </div>
            <span class="status-chip ${ticket.status === 'closed' ? 'rejected' : ticket.status === 'in_progress' ? 'pending' : 'approved'}">${getSupportStatusLabel(ticket.status, t)}</span>
        </div>
        <div class="support-ticket-meta">${getSupportCategoryLabel(ticket.category, t)} · ${getSupportPriorityLabel(ticket.priority, t)} · ${formatRegistrationDate(ticket.updatedAt || ticket.createdAt, locale)}</div>
    `;

    const thread = document.createElement('div');
    thread.className = 'support-ticket-thread';
    (ticket.messages || []).slice(-3).forEach((message) => {
        const item = document.createElement('div');
        item.className = `ticket-message ${message.authorRole === 'admin' ? 'admin' : 'user'}`;
        item.innerHTML = `
            <div class="ticket-message-head">
                <strong>${message.authorRole === 'admin' ? 'Admin' : ticket.userName || 'User'}</strong>
                <span class="ticket-message-meta">${formatRegistrationDate(message.createdAt, locale)}</span>
            </div>
            <div class="ticket-message-meta">${message.text}</div>
        `;
        thread.appendChild(item);
    });
    card.appendChild(thread);

    const actions = document.createElement('div');
    actions.className = 'request-actions';

    const replyButton = document.createElement('button');
    replyButton.className = 'action-btn';
    replyButton.type = 'button';
    replyButton.textContent = t.supportReplyAction;
    replyButton.addEventListener('click', () => openSupportReplyModal(ticket.id, Boolean(options.adminMode)));
    actions.appendChild(replyButton);

    if (options.adminMode) {
        const statusButton = document.createElement('button');
        statusButton.className = 'action-btn';
        statusButton.type = 'button';
        statusButton.textContent = ticket.status === 'closed' ? t.supportReopenAction : t.supportCloseAction;
        statusButton.addEventListener('click', () => toggleSupportTicketStatus(ticket.id));
        actions.appendChild(statusButton);
    }

    card.appendChild(actions);
    return card;
}

function renderSupportCenter() {
    const container = document.getElementById('support-ticket-list');
    if (!container || !window.gameDB) return;

    const user = window.gameDB.getUser();
    const t = getTranslations();
    const actorId = getActorId();
    const tickets = window.gameDB.getSupportTickets().filter((item) => Boolean(user.isAdmin) || String(item.userId) === actorId);

    container.innerHTML = '';
    if (!tickets.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.supportEmpty;
        container.appendChild(empty);
        return;
    }

    tickets.forEach((ticket) => container.appendChild(createSupportTicketCard(ticket, { adminMode: Boolean(user.isAdmin) })));
}

function renderAdminSupportList() {
    const container = document.getElementById('admin-support-list');
    if (!container || !window.gameDB) return;
    const t = getTranslations();
    const tickets = window.gameDB.getSupportTickets();
    container.innerHTML = '';
    if (!tickets.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.supportEmpty;
        container.appendChild(empty);
        return;
    }
    tickets.forEach((ticket) => container.appendChild(createSupportTicketCard(ticket, { adminMode: true })));
}

function openSupportCreateModal() {
    const t = getTranslations();
    window.openFormModal({
        title: t.supportNewTicket,
        sectionLabel: t.supportTitle,
        fields: [
            { name: 'subject', label: t.supportSubjectLabel, type: 'text', required: true },
            { name: 'category', label: t.supportCategoryLabel, type: 'select', value: 'general', options: getSupportCategoryOptions() },
            { name: 'priority', label: t.supportPriorityLabel, type: 'select', value: 'normal', options: getSupportPriorityOptions() },
            { name: 'message', label: t.supportMessageLabel, type: 'textarea', required: true, rows: 4 }
        ],
        onConfirm: (values) => {
            const user = window.gameDB.getUser();
            window.gameDB.createSupportTicket({
                userId: getActorId(),
                username: user.username,
                userName: user.name,
                subject: values.subject,
                category: values.category,
                priority: values.priority,
                message: values.message,
                authorRole: 'user'
            });
            renderApp();
            openSupportModal();
            showNotification(t.supportCreateDone, 'success');
        }
    });
}

function openSupportReplyModal(ticketId, adminMode = false) {
    const t = getTranslations();
    const ticket = window.gameDB.getSupportTicketById(ticketId);
    if (!ticket) return;
    window.openFormModal({
        title: `${t.supportReplyTitle} · ${ticket.subject}`,
        sectionLabel: t.supportTitle,
        fields: [
            { name: 'reply', label: t.supportMessageLabel, type: 'textarea', required: true, rows: 4 },
            ...(adminMode ? [{ name: 'status', label: t.statusPending, type: 'select', value: ticket.status || 'open', options: getSupportStatusOptions() }] : [])
        ],
        onConfirm: (values) => {
            window.gameDB.appendSupportTicketMessage(ticketId, {
                authorId: getActorId(),
                authorRole: adminMode ? 'admin' : 'user',
                text: values.reply,
                status: adminMode ? values.status : ticket.status
            });
            renderApp();
            openSupportModal();
            showNotification(t.supportReplyDone, 'success');
        }
    });
}

function toggleSupportTicketStatus(ticketId) {
    const ticket = window.gameDB.getSupportTicketById(ticketId);
    const t = getTranslations();
    if (!ticket) return;
    const nextStatus = ticket.status === 'closed' ? 'in_progress' : 'closed';
    window.gameDB.updateSupportTicket(ticketId, {
        status: nextStatus,
        adminId: getActorId()
    });
    renderApp();
    showNotification(t.supportStatusDone, nextStatus === 'closed' ? 'success' : 'info');
}

function getSupportCategoryOptions() {
    const t = getTranslations();
    return [
        { value: 'general', label: t.supportCategoryGeneral },
        { value: 'finance', label: t.supportCategoryFinance },
        { value: 'bug', label: t.supportCategoryBug },
        { value: 'partner', label: t.supportCategoryPartner }
    ];
}

function getSupportPriorityOptions() {
    const t = getTranslations();
    return [
        { value: 'low', label: t.supportPriorityLow },
        { value: 'normal', label: t.supportPriorityNormal },
        { value: 'high', label: t.supportPriorityHigh }
    ];
}

function getSupportStatusOptions() {
    const t = getTranslations();
    return [
        { value: 'open', label: t.supportOpenStatus },
        { value: 'in_progress', label: t.supportProgressStatus },
        { value: 'closed', label: t.supportClosedStatus }
    ];
}

function closeFormModal() {
    const formModal = document.getElementById('form-modal');
    if (formModal) {
        formModal.classList.add('hidden');
    }
    syncModalState();
}

function closeUserDetailModal() {
    const userDetailModal = document.getElementById('user-detail-modal');
    if (userDetailModal) {
        userDetailModal.classList.add('hidden');
    }
    syncModalState();
}

function closeHeroDetailModal() {
    const heroDetailModal = document.getElementById('hero-detail-modal');
    if (heroDetailModal) {
        heroDetailModal.classList.add('hidden');
    }
    APP_STATE.selectedHeroInstanceId = '';
    syncModalState();
}

function syncModalState() {
    const modals = ['admin-modal', 'form-modal', 'user-detail-modal', 'notifications-modal', 'support-modal', 'hero-detail-modal'];
    const hasOpenModal = modals
        .map((id) => document.getElementById(id))
        .some((element) => element && !element.classList.contains('hidden'));
    document.body.classList.toggle('modal-open', hasOpenModal);

    // Animate visible modals
    modals.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (!el.classList.contains('hidden')) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => el.classList.add('modal-visible'));
            });
        } else {
            el.classList.remove('modal-visible');
        }
    });
}

function getRequestStatusLabel(status, t = getTranslations()) {
    if (status === 'approved') return t.statusApproved;
    if (status === 'rejected') return t.statusRejected;
    if (status === 'completed') return t.historyFilterCompleted;
    return t.statusPending;
}

function getMethodLabel(methodKey, t = getTranslations()) {
    const map = {
        card: t.methodCard,
        crypto: t.methodCrypto,
        telegram: t.methodTelegram,
        ton: t.methodTon || 'TON',
        usdt_bep20: t.methodUsdtBep20 || 'USDT BEP-20',
        usdt_trc20: t.methodUsdtTrc20 || 'USDT TRC-20',
        tron_trx: t.methodTronTrx || 'TRON-TRX',
        'rnx-exchange': '$RNX Exchange'
    };
    return map[methodKey] || methodKey || '-';
}

function getHeroTextSet() {
    const isUa = getCurrentLanguage() === 'ua';
    return {
        buy: isUa ? 'Купити' : 'Купить',
        details: isUa ? 'Детальніше' : 'Подробнее',
        collapse: isUa ? 'Згорнути' : 'Свернуть',
        noHeroes: isUa ? 'У вас поки немає героїв. Оберіть першого в магазині.' : 'У вас пока нет героев. Выберите первого в магазине.',
        heroNotFound: isUa ? 'Героя не знайдено' : 'Герой не найден',
        heroPurchased: isUa ? 'Героя придбано' : 'Герой куплен',
        heroUpgraded: isUa ? 'Героя покращено' : 'Герой улучшен',
        heroSold: isUa ? 'Героя продано' : 'Герой продан',
        heroReissued: isUa ? 'Героя перевидано' : 'Герой переиздан',
        rarity: isUa ? 'Рідкість' : 'Редкость',
        role: isUa ? 'Клас' : 'Класс',
        source: isUa ? 'Джерело' : 'Источник',
        currentIncome: isUa ? 'Дохід / година' : 'Доход / час',
        totalIncome: isUa ? 'Дохід за цикл' : 'Доход за цикл',
        cycleIncome: isUa ? 'Виплата циклу' : 'Выплата цикла',
        duration: isUa ? 'Термін роботи' : 'Срок работы',
        level: isUa ? 'Рівень' : 'Уровень',
        nextUpgrade: isUa ? 'Покращення' : 'Улучшение',
        growth: isUa ? 'Ріст за рівень' : 'Рост за уровень',
        power: isUa ? 'Сила героя' : 'Сила героя',
        upgrade: isUa ? 'Прокачати' : 'Прокачать',
        sell: isUa ? 'Продати' : 'Продать',
        reissue: isUa ? 'Перевидати' : 'Переиздать',
        timer: isUa ? 'До завершення циклу' : 'До завершения цикла',
        cycleReady: isUa ? 'Цикл завершено' : 'Цикл завершён',
        lifetime: isUa ? 'Зароблено всього' : 'Заработано всего',
        synergy: isUa ? 'Синергія колекції' : 'Синергия коллекции',
        rarityCombo: isUa ? 'Бонус рідкості' : 'Бонус редкости',
        classCombo: isUa ? 'Бонус класів' : 'Бонус классов',
        heroProfile: isUa ? 'Профіль героя' : 'Профиль героя',
        actionHub: isUa ? 'Меню дій' : 'Меню действий',
        actionHubSubtitle: isUa ? 'Швидкі переходи, історія та центри керування' : 'Быстрые переходы, история и центры управления',
        menuHistory: isUa ? 'Історія' : 'История',
        menuAudit: isUa ? 'Аудит' : 'Аудит',
        menuSupport: isUa ? 'Підтримка' : 'Поддержка',
        menuNotifications: isUa ? 'Сповіщення' : 'Уведомления',
        menuHeroLedger: isUa ? 'Герої' : 'Герои',
        menuOpen: isUa ? 'Відкрити' : 'Открыть',
        allRarities: isUa ? 'Усі рідкості' : 'Все редкости',
        common: isUa ? 'Звичайний' : 'Обычный',
        rare: isUa ? 'Рідкісний' : 'Редкий',
        epic: isUa ? 'Епічний' : 'Эпический',
        legendary: isUa ? 'Легендарний' : 'Легендарный',
        shopSource: isUa ? 'Покупка' : 'Покупка',
        adminSource: isUa ? 'Видача адміном' : 'Выдача админом',
        upgradeSource: isUa ? 'Прокачка' : 'Прокачка',
        incomeSource: isUa ? 'Автодохід' : 'Автодоход',
        sellSource: isUa ? 'Продаж' : 'Продажа',
        reissueSource: isUa ? 'Перевидання' : 'Переиздание',
        detailsTitle: isUa ? 'Пасив і механіка' : 'Пассив и механика',
        startLevel: isUa ? 'Стартовий рівень' : 'Стартовый уровень',
        levelRange: isUa ? 'Рівень' : 'Уровень',
        nextPayout: isUa ? 'Наступна виплата' : 'Следующая выплата'
    };
}

function getHeroRarityLabel(rarityKey) {
    const text = getHeroTextSet();
    const map = {
        common: text.common,
        rare: text.rare,
        epic: text.epic,
        legendary: text.legendary
    };
    return map[rarityKey] || text.common;
}

function getHeroOperationTitle(type) {
    const text = getHeroTextSet();
    const map = {
        'hero-purchase': text.shopSource,
        'hero-grant': text.adminSource,
        'hero-upgrade': text.upgradeSource,
        'hero-income': text.incomeSource,
        'hero-sell': text.sellSource,
        'hero-reissue': text.reissueSource
    };
    return map[type] || type;
}

function getHeroSourceLabel(source) {
    const text = getHeroTextSet();
    const map = {
        shop: text.shopSource,
        'admin-grant': text.adminSource,
        upgrade: text.upgradeSource,
        'admin-upgrade': text.upgradeSource,
        income: text.incomeSource,
        sell: text.sellSource,
        reissue: text.reissueSource
    };
    return map[source] || source || '-';
}

function isHeroOperation(operation) {
    return Boolean(operation && typeof operation.type === 'string' && operation.type.startsWith('hero-'));
}

function getLocalizedHeroData(hero) {
    const template = hero && hero.heroId ? HEROES.find((item) => item.id === hero.heroId) : HEROES.find((item) => item.id === hero?.id);
    if (!template) return hero;

    const language = getCurrentLanguage();
    return {
        ...hero,
        name: typeof template.name === 'object' ? (template.name[language] || template.name.ru || hero.name) : (template.name || hero.name),
        description: typeof template.description === 'object' ? (template.description[language] || template.description.ru || hero.description) : (template.description || hero.description),
        role: typeof template.role === 'object' ? (template.role[language] || template.role.ru || hero.role) : (template.role || hero.role),
        image: createHeroArtwork(template),
        palette: template.palette || hero.palette
    };
}

function formatCountdown(targetDate) {
    const distance = new Date(targetDate).getTime() - Date.now();
    if (!Number.isFinite(distance) || distance <= 0) {
        return getHeroTextSet().cycleReady;
    }

    const totalSeconds = Math.floor(distance / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getHeroSynergySummary(heroes) {
    const ownedHeroes = Array.isArray(heroes) ? heroes.map((hero) => getLocalizedHeroData(hero)) : [];
    const rarityCounts = ownedHeroes.reduce((accumulator, hero) => {
        accumulator[hero.rarityKey] = (accumulator[hero.rarityKey] || 0) + 1;
        return accumulator;
    }, {});
    const roleCounts = ownedHeroes.reduce((accumulator, hero) => {
        const roleKey = String(hero.role || 'role').toLowerCase();
        accumulator[roleKey] = (accumulator[roleKey] || 0) + 1;
        return accumulator;
    }, {});

    let rarityBonus = 0;
    rarityBonus += Math.floor((rarityCounts.rare || 0) / 2) * 0.04;
    rarityBonus += Math.floor((rarityCounts.epic || 0) / 2) * 0.08;
    rarityBonus += (rarityCounts.legendary || 0) * 0.12;

    const uniqueRoles = Object.keys(roleCounts).length;
    let classBonus = 0;
    classBonus += uniqueRoles >= 3 ? 0.06 : 0;
    classBonus += uniqueRoles >= 5 ? 0.08 : 0;
    Object.values(roleCounts).forEach((count) => {
        if (count >= 2) classBonus += (count - 1) * 0.025;
    });

    return {
        rarityBonus,
        classBonus,
        totalBonus: rarityBonus + classBonus,
        multiplier: 1 + rarityBonus + classBonus
    };
}

function enrichHeroWithEconomy(hero, allHeroes = []) {
    const localizedHero = getLocalizedHeroData(hero);
    const synergy = getHeroSynergySummary(allHeroes.length ? allHeroes : [localizedHero]);
    const boostedProfitPerHour = Math.round(Number(localizedHero.profitPerHour || 0) * synergy.multiplier);
    const boostedTotalProfit = Math.round(boostedProfitPerHour * Number(localizedHero.durationHours || 0));

    return {
        ...localizedHero,
        boostedProfitPerHour,
        boostedTotalProfit,
        synergyMultiplier: synergy.multiplier,
        synergyBonus: synergy.totalBonus,
        countdown: formatCountdown(localizedHero.cycleEndsAt)
    };
}

function processHeroEconomy() {
    if (!window.gameDB) return false;
    const user = window.gameDB.getUser();
    const heroes = Array.isArray(user.heroes) ? user.heroes : [];
    if (!heroes.length) return false;

    const synergy = getHeroSynergySummary(heroes);
    const now = Date.now();
    let totalPayout = 0;
    let changed = false;

    const nextHeroes = heroes.map((hero) => {
        const normalizedHero = window.gameDB.normalizeHero(hero);
        const cycleEndMs = new Date(normalizedHero.cycleEndsAt).getTime();
        const durationMs = Math.max(1, Number(normalizedHero.durationHours || 24)) * 60 * 60 * 1000;
        if (!Number.isFinite(cycleEndMs) || cycleEndMs > now) {
            return normalizedHero;
        }

        const completedCycles = Math.max(1, Math.floor((now - cycleEndMs) / durationMs) + 1);
        const payoutPerCycle = Math.round(Number(normalizedHero.totalProfit || 0) * synergy.multiplier);
        const payout = payoutPerCycle * completedCycles;
        totalPayout += payout;
        changed = true;

        window.gameDB.createHeroOperation({
            type: 'hero-income',
            userId: String(user.id || ''),
            username: user.username,
            heroId: normalizedHero.heroId,
            heroInstanceId: normalizedHero.instanceId,
            heroName: getLocalizedHeroData(normalizedHero).name,
            rarityKey: normalizedHero.rarityKey,
            amount: payout,
            levelBefore: normalizedHero.level,
            levelAfter: normalizedHero.level,
            source: 'income',
            comment: `${completedCycles} cycle(s)`
        });

        return window.gameDB.normalizeHero({
            ...normalizedHero,
            cycleStartedAt: new Date(now - ((now - cycleEndMs) % durationMs)).toISOString(),
            cycleEndsAt: new Date(cycleEndMs + completedCycles * durationMs).toISOString(),
            cyclesCompleted: Number(normalizedHero.cyclesCompleted || 0) + completedCycles,
            lifetimeEarnings: Number(normalizedHero.lifetimeEarnings || 0) + payout,
            lastPayoutAt: new Date(now).toISOString()
        });
    });

    if (changed) {
        window.gameDB.updateUser({
            rnxBalance: Number(user.rnxBalance || 0) + totalPayout,
            heroes: nextHeroes,
            stats: { ...user.stats, totalRnxEarned: Number(user.stats?.totalRnxEarned || 0) + totalPayout }
        });
    }

    return changed;
}

function renderHeroTimersOnly() {
    document.querySelectorAll('[data-hero-countdown]').forEach((element) => {
        element.textContent = formatCountdown(element.dataset.heroCountdown);
    });
    const nextPayoutEl = document.getElementById('my-heroes-next-payout');
    if (nextPayoutEl && nextPayoutEl.dataset.heroCountdown) {
        nextPayoutEl.textContent = formatCountdown(nextPayoutEl.dataset.heroCountdown);
    }
}

function renderMenuDashboard() {
    const container = document.getElementById('menu-dashboard');
    if (!container || !window.gameDB) return;
    const heroText = getHeroTextSet();
    const user = window.gameDB.getUser();
    const heroes = Array.isArray(user.heroes) ? user.heroes : [];
    const synergy = getHeroSynergySummary(heroes);
    const unread = window.gameDB.getNotificationsForUser(getActorId(), Boolean(user.isAdmin)).filter((item) => !(item.readBy || []).includes(getActorId())).length;
    const pendingTickets = window.gameDB.getSupportTickets().filter((item) => Boolean(user.isAdmin) || String(item.userId) === getActorId()).filter((item) => item.status !== 'closed').length;
    const heroOps = window.gameDB.getHeroOperations().filter((item) => String(item.userId) === String(user.id || '') || (!user.id && !item.userId)).length;

    const isUa = getCurrentLanguage() === 'ua';
    const menuT = getTranslations();
    const cards = [
        { title: heroText.menuNotifications, value: unread, action: () => openNotificationsModal() },
        { title: heroText.menuSupport, value: pendingTickets, action: () => openSupportModal() },
        { title: heroText.menuHeroLedger, value: heroOps, action: () => { APP_STATE.historyFilter = 'completed'; renderHistorySection(); } },
        { title: heroText.synergy, value: `${Math.round(synergy.totalBonus * 100)}%`, action: () => handleNavigation('mines') },
        { title: menuT.referralTitle, value: user.stats?.referrals || 0, action: () => { setActiveNavButton('tasks'); handleNavigation('referral'); } },
        { title: menuT.promoTitle, value: '→', action: () => openPromoCodeModal() }
    ];

    container.innerHTML = `
        <div class="menu-dashboard-head">
            <div>
                <p class="section-label">${heroText.actionHub}</p>
                <h3 class="menu-dashboard-title">${heroText.actionHubSubtitle}</h3>
            </div>
        </div>
    `;

    const grid = document.createElement('div');
    grid.className = 'menu-dashboard-grid';
    cards.forEach((item) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'menu-hub-card';
        card.innerHTML = `
            <span class="menu-hub-label">${item.title}</span>
            <strong class="menu-hub-value">${item.value}</strong>
            <span class="menu-hub-action">${heroText.menuOpen}</span>
        `;
        card.addEventListener('click', item.action);
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

function renderAdminTabState() {
    document.querySelectorAll('#admin-tabs [data-admin-tab]').forEach((button) => {
        button.classList.toggle('active', button.dataset.adminTab === APP_STATE.adminTab);
    });

    document.querySelectorAll('.admin-block[data-admin-tab]').forEach((block) => {
        const shouldShow = APP_STATE.adminTab === 'overview'
            ? block.dataset.adminTab === 'overview'
            : block.dataset.adminTab === APP_STATE.adminTab;
        block.classList.toggle('hidden', !shouldShow);
    });
}

function createRequestCard(request, options = {}) {
    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const card = document.createElement('div');
    card.className = 'request-card';

    const title = request.type === 'deposit' ? t.depositRequestTitle : t.withdrawRequestTitle;
    const statusLabel = getRequestStatusLabel(request.status, t);
    const usernameLine = request.username ? ` · ${request.username}` : '';

    card.innerHTML = `
        <div class="request-card-head">
            <div>
                <div class="request-card-title">${title} · ${formatCurrency(request.amount, locale)}</div>
                <div class="request-card-sub">ID ${request.userId || '-'}${usernameLine}</div>
            </div>
            <span class="status-chip ${request.status}">${statusLabel}</span>
        </div>
        <div class="request-card-meta">${t.methodLabel}: ${getMethodLabel(request.method, t)}${request.requisites ? ` · ${request.requisites}` : ''}</div>
        <div class="request-card-meta">${formatRegistrationDate(request.createdAt, locale)}${request.comment ? ` · ${request.comment}` : ''}</div>
    `;

    if (request.resolutionComment) {
        const resolution = document.createElement('div');
        resolution.className = 'request-card-meta';
        resolution.textContent = request.resolutionComment;
        card.appendChild(resolution);
    }

    if (options.showAdminActions && request.status === 'pending') {
        const actions = document.createElement('div');
        actions.className = 'request-actions';

        const approveButton = document.createElement('button');
        approveButton.className = 'action-btn';
        approveButton.type = 'button';
        approveButton.textContent = t.statusApproved;
        approveButton.addEventListener('click', () => resolveRequest(request.id, 'approve'));

        const rejectButton = document.createElement('button');
        rejectButton.className = 'action-btn action-btn-danger';
        rejectButton.type = 'button';
        rejectButton.textContent = t.statusRejected;
        rejectButton.addEventListener('click', () => resolveRequest(request.id, 'reject'));

        actions.appendChild(approveButton);
        actions.appendChild(rejectButton);
        card.appendChild(actions);
    }

    return card;
}

function renderUserRequests() {
    const container = document.getElementById('user-requests-list');
    if (!container || !window.gameDB) return;

    const user = window.gameDB.getUser();
    const requests = window.gameDB.getRequests().filter((item) => String(item.userId) === String(user.id));
    const t = getTranslations();
    container.innerHTML = '';

    if (!requests.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noRequests;
        container.appendChild(empty);
        return;
    }

    requests.slice(0, 6).forEach((request) => {
        container.appendChild(createRequestCard(request));
    });
}

function renderAdminRequestList() {
    const container = document.getElementById('admin-request-list');
    if (!container || !window.gameDB) return;

    const requests = window.gameDB.getRequests().filter((item) => item.status === 'pending');
    const t = getTranslations();
    container.innerHTML = '';

    if (!requests.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noRequests;
        container.appendChild(empty);
        return;
    }

    requests.forEach((request) => {
        container.appendChild(createRequestCard(request, { showAdminActions: true }));
    });
}

function renderAdminLogList() {
    const container = document.getElementById('admin-log-list');
    if (!container || !window.gameDB) return;

    const entries = window.gameDB.getAdminLog();
    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    container.innerHTML = '';

    if (!entries.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noAdminLog;
        container.appendChild(empty);
        return;
    }

    entries.slice(0, 8).forEach((entry) => {
        const card = document.createElement('div');
        card.className = 'request-card';
        card.innerHTML = `
            <div class="request-card-title">${getAuditTypeLabel(entry.type, t)}</div>
            <div class="request-card-meta">${describeAuditEntry(entry, locale) || '-'}</div>
            <div class="request-card-meta">${formatRegistrationDate(entry.createdAt, locale)}</div>
        `;
        container.appendChild(card);
    });
}

function getAuditTypeLabel(type, t = getTranslations()) {
    const map = {
        'balance-adjustment': t.adminAddBalanceTitle,
        'hero-granted': t.adminGrantHeroTitle,
        'hero-upgraded': `${t.adminGrantHeroTitle} +`,
        'admin-access-granted': t.adminGrantAccessTitle,
        'admin-access-revoked': t.adminRevokeAccessButton,
        'request-approved': t.requestApproved,
        'request-rejected': t.requestRejected,
        'profile-updated': t.editProfileTitle,
        'task-created': t.taskCreated,
        'task-updated': t.taskUpdated,
        'task-status-updated': t.tasksManageTitle,
        'finance-settings-updated': t.financeSettingsTitle,
        'online-updated': t.adminOnlineTitle,
        'support-ticket-created': t.supportNewTicket,
        'support-ticket-updated': t.supportTitle,
        'support-ticket-replied': t.supportReplyTitle,
        'support-ticket-status': t.supportAdminTitle
    };
    return map[type] || type;
}

function resolveAuditActor(adminId) {
    if (!adminId) return '';
    const admin = window.gameDB.getUserById(adminId);
    return admin ? `${admin.name || 'Admin'} (${adminId})` : `Admin ${adminId}`;
}

function describeAuditEntry(entry, locale) {
    const parts = [];
    const actor = resolveAuditActor(entry.adminId);
    if (actor) parts.push(actor);
    if (entry.targetUserId) parts.push(`ID ${entry.targetUserId}`);
    if (entry.heroName) parts.push(entry.heroName);
    if (entry.taskTitle) parts.push(entry.taskTitle);
    if (entry.amount) parts.push(formatCurrency(Math.abs(entry.amount), locale));
    if (entry.reason) parts.push(entry.reason);
    return parts.join(' · ');
}

function renderAuditSection() {
    const filtersContainer = document.getElementById('audit-filters');
    const listContainer = document.getElementById('audit-list');
    if (!filtersContainer || !listContainer || !window.gameDB) return;

    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const entries = window.gameDB.getAdminLog();
    const filters = [
        { id: 'all', label: t.auditFilterAll },
        ...Array.from(new Set(entries.map((entry) => entry.type))).map((type) => ({
            id: type,
            label: getAuditTypeLabel(type, t)
        }))
    ];

    if (!filters.some((item) => item.id === APP_STATE.auditFilter)) {
        APP_STATE.auditFilter = 'all';
    }

    filtersContainer.innerHTML = '';
    filters.forEach((filter) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `filter-chip${APP_STATE.auditFilter === filter.id ? ' active' : ''}`;
        button.textContent = filter.label;
        button.addEventListener('click', () => {
            APP_STATE.auditFilter = filter.id;
            renderAuditSection();
        });
        filtersContainer.appendChild(button);
    });

    listContainer.innerHTML = '';
    const filteredEntries = entries.filter((entry) => APP_STATE.auditFilter === 'all' ? true : entry.type === APP_STATE.auditFilter);

    if (!filteredEntries.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noAuditEntries;
        listContainer.appendChild(empty);
        return;
    }

    filteredEntries.forEach((entry) => {
        const card = document.createElement('div');
        card.className = 'request-card';
        card.innerHTML = `
            <div class="request-card-head">
                <div>
                    <div class="request-card-title">${getAuditTypeLabel(entry.type, t)}</div>
                    <div class="request-card-sub">${describeAuditEntry(entry, locale) || '-'}</div>
                </div>
                <span class="status-chip approved">${resolveAuditActor(entry.adminId) || 'System'}</span>
            </div>
            <div class="request-card-meta">${formatRegistrationDate(entry.createdAt, locale)}</div>
        `;
        listContainer.appendChild(card);
    });
}

function renderFinanceSummary() {
    const container = document.getElementById('admin-finance-summary');
    if (!container || !window.gameDB) return;

    const t = getTranslations();
    const finance = window.gameDB.getFinanceConfig();
    container.innerHTML = '';

    ['deposit', 'withdraw'].forEach((type) => {
        const config = finance[type];
        const methods = getEnabledMethods(type).map((item) => item.label).join(', ') || t.disabledLabel;
        const card = document.createElement('div');
        card.className = 'summary-card';
        card.innerHTML = `
            <div class="request-card-title">${type === 'deposit' ? t.depositLimitsTitle : t.withdrawLimitsTitle}</div>
            <div class="summary-row"><span>${t.minAmountLabel}</span><strong>${config.min} TON</strong></div>
            <div class="summary-row"><span>${t.maxAmountLabel}</span><strong>${config.max} TON</strong></div>
            <div class="summary-row"><span>${t.enabledMethodsLabel}</span><strong>${methods}</strong></div>
        `;
        container.appendChild(card);
    });
}

function renderTasks() {
    const container = document.getElementById('tasks-list');
    if (!container || !window.gameDB) return;

    const t = getTranslations();
    const tasks = window.gameDB.getTasks().filter((item) => item.status === 'active');
    container.innerHTML = '';

    if (!tasks.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noTasks;
        container.appendChild(empty);
        return;
    }

    tasks.forEach((task) => {
        const card = document.createElement('article');
        card.className = 'task-card';
        card.innerHTML = `
            <div class="task-card-head">
                <div class="task-card-title">${task.title}</div>
                <span class="status-chip approved">${t.taskStatusActive}</span>
            </div>
            <div class="task-card-desc">${task.description}</div>
            <div class="task-card-reward">${t.taskReward}: ${formatRnx(task.reward, LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU')}</div>
        `;
        container.appendChild(card);
    });
}

function renderHistorySection() {
    const filtersContainer = document.getElementById('history-filters');
    const listContainer = document.getElementById('history-list');
    if (!filtersContainer || !listContainer || !window.gameDB) return;

    const t = getTranslations();
    const allOperations = [
        ...window.gameDB.getFinanceOperations(),
        ...window.gameDB.getHeroOperations()
    ].sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime());
    const filters = [
        { id: 'all', label: t.historyFilterAll },
        { id: 'pending', label: t.historyFilterPending },
        { id: 'approved', label: t.historyFilterApproved },
        { id: 'rejected', label: t.historyFilterRejected },
        { id: 'completed', label: t.historyFilterCompleted }
    ];

    filtersContainer.innerHTML = '';
    filters.forEach((filter) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `filter-chip${APP_STATE.historyFilter === filter.id ? ' active' : ''}`;
        button.textContent = filter.label;
        button.addEventListener('click', () => {
            APP_STATE.historyFilter = filter.id;
            renderHistorySection();
        });
        filtersContainer.appendChild(button);
    });

    listContainer.innerHTML = '';
    const filtered = allOperations.filter((item) => APP_STATE.historyFilter === 'all' ? true : item.status === APP_STATE.historyFilter);

    if (!filtered.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noHistory;
        listContainer.appendChild(empty);
        return;
    }

    filtered.slice(0, 30).forEach((operation) => {
        listContainer.appendChild(createFinanceOperationCard(operation));
    });
}

function createFinanceOperationCard(operation) {
    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const card = document.createElement('div');
    card.className = 'request-card';

    if (isHeroOperation(operation)) {
        const heroText = getHeroTextSet();
        const levelLine = operation.levelBefore && operation.levelBefore !== operation.levelAfter
            ? `${heroText.levelRange}: ${operation.levelBefore} -> ${operation.levelAfter}`
            : `${heroText.levelRange}: ${operation.levelAfter || 1}`;

        card.innerHTML = `
            <div class="request-card-head">
                <div>
                    <div class="request-card-title">${getHeroOperationTitle(operation.type)} · ${operation.heroName || '-'}</div>
                    <div class="request-card-sub">ID ${operation.userId || '-'}${operation.username ? ` · ${operation.username}` : ''}</div>
                </div>
                <span class="status-chip ${operation.status}">${getRequestStatusLabel(operation.status, t)}</span>
            </div>
            <div class="request-card-meta">${heroText.rarity}: ${getHeroRarityLabel(operation.rarityKey)} · ${heroText.source}: ${getHeroSourceLabel(operation.source)}</div>
            <div class="request-card-meta">${levelLine}${operation.amount ? ` · ${formatCurrency(operation.amount, locale)}` : ''}</div>
            <div class="request-card-meta">${formatRegistrationDate(operation.createdAt, locale)}${operation.comment ? ` · ${operation.comment}` : ''}</div>
        `;
        return card;
    }

    const titleMap = {
        deposit: t.depositRequestTitle,
        withdraw: t.withdrawRequestTitle,
        'admin-credit': t.adminAddBalanceTitle,
        'admin-debit': t.adminSubtractBalanceTitle
    };
    card.innerHTML = `
        <div class="request-card-head">
            <div>
                <div class="request-card-title">${titleMap[operation.type] || operation.type} · ${formatCurrency(operation.amount, locale)}</div>
                <div class="request-card-sub">ID ${operation.userId || '-'}${operation.username ? ` · ${operation.username}` : ''}</div>
            </div>
            <span class="status-chip ${operation.status}">${getRequestStatusLabel(operation.status, t)}</span>
        </div>
        <div class="request-card-meta">${t.methodLabel}: ${getMethodLabel(operation.method, t)}${operation.details ? ` · ${operation.details}` : ''}</div>
        <div class="request-card-meta">${formatRegistrationDate(operation.createdAt, locale)}${operation.comment ? ` · ${operation.comment}` : ''}</div>
    `;
    return card;
}

function openUserDetailModal(userId, initialTab = 'finance') {
    APP_STATE.selectedUserId = userId;
    APP_STATE.selectedUserTab = initialTab;
    renderUserDetailModal();
    const modal = document.getElementById('user-detail-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
    syncModalState();
}

function renderUserDetailModal() {
    const titleEl = document.getElementById('user-detail-title');
    const labelEl = document.getElementById('user-detail-label');
    const tabsEl = document.getElementById('user-detail-tabs');
    const bodyEl = document.getElementById('user-detail-body');
    if (!titleEl || !labelEl || !tabsEl || !bodyEl || !window.gameDB) return;

    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const user = APP_STATE.selectedUserId ? window.gameDB.getUserById(APP_STATE.selectedUserId) : null;

    if (!user) {
        titleEl.textContent = t.userCardTitle;
        labelEl.textContent = '';
        tabsEl.innerHTML = '';
        bodyEl.innerHTML = '';
        return;
    }

    titleEl.textContent = `${t.userCardTitle} · ${user.name || 'User'}`;
    labelEl.textContent = `ID ${user.id || '-'} · ${user.username || '@user'}`;

    const tabs = [
        { id: 'finance', label: t.userTabFinance },
        { id: 'heroes', label: t.userTabHeroes },
        { id: 'tasks', label: t.userTabTasks },
        { id: 'history', label: t.userTabHistory }
    ];

    tabsEl.innerHTML = '';
    tabs.forEach((tab) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `tab-chip${APP_STATE.selectedUserTab === tab.id ? ' active' : ''}`;
        button.textContent = tab.label;
        button.addEventListener('click', () => {
            APP_STATE.selectedUserTab = tab.id;
            renderUserDetailModal();
        });
        tabsEl.appendChild(button);
    });

    if (APP_STATE.selectedUserTab === 'finance') {
        const pendingRequests = window.gameDB.getRequests().filter((item) => String(item.userId) === String(user.id) && item.status === 'pending').length;
        const operations = window.gameDB.getFinanceOperations().filter((item) => String(item.userId) === String(user.id));
        bodyEl.innerHTML = `
            <div class="detail-grid">
                <div class="detail-card"><div class="detail-title">${t.balanceBuyLabel}</div><div class="detail-value">${Number(user.balanceBuy || 0).toFixed(2)} TON</div></div>
                <div class="detail-card"><div class="detail-title">${t.balanceWithdrawLabel}</div><div class="detail-value">${Number(user.balanceWithdraw || 0).toFixed(2)} TON</div></div>
                <div class="detail-card"><div class="detail-title">${t.rnxBalanceLabel}</div><div class="detail-value">${formatNumber(user.rnxBalance || 0, locale)} $RNX</div></div>
                <div class="detail-card"><div class="detail-title">${t.pendingRequestsTitle}</div><div class="detail-value">${pendingRequests}</div></div>
                <div class="detail-card"><div class="detail-title">${t.depositedLabel}</div><div class="detail-value">${Number(user.stats?.deposited || 0).toFixed(2)} TON</div></div>
                <div class="detail-card"><div class="detail-title">${t.withdrawnLabel}</div><div class="detail-value">${Number(user.stats?.withdrawn || 0).toFixed(2)} TON</div></div>
            </div>
        `;
        operations.slice(0, 6).forEach((operation) => bodyEl.appendChild(createFinanceOperationCard(operation)));
        return;
    }

    if (APP_STATE.selectedUserTab === 'heroes') {
        bodyEl.innerHTML = '';
        const heroes = Array.isArray(user.heroes) ? user.heroes : [];
        if (!heroes.length) {
            const empty = document.createElement('div');
            empty.className = 'request-card';
            empty.textContent = t.userNoHeroes;
            bodyEl.appendChild(empty);
            return;
        }

        heroes
            .slice()
            .sort((left, right) => Number(right.totalProfit || 0) - Number(left.totalProfit || 0))
            .forEach((hero) => bodyEl.appendChild(createOwnedHeroCard(hero, { interactive: false, allHeroes: heroes })));
        return;
    }

    if (APP_STATE.selectedUserTab === 'tasks') {
        bodyEl.innerHTML = '';
        const tasks = window.gameDB.getTasks();
        if (!tasks.length) {
            const empty = document.createElement('div');
            empty.className = 'request-card';
            empty.textContent = t.userNoTasks;
            bodyEl.appendChild(empty);
            return;
        }

        tasks.forEach((task) => {
            const card = document.createElement('div');
            card.className = 'request-card';
            card.innerHTML = `
                <div class="request-card-head">
                    <div>
                        <div class="request-card-title">${task.title}</div>
                        <div class="request-card-meta">${task.description}</div>
                    </div>
                    <span class="status-chip ${task.status === 'active' ? 'approved' : 'rejected'}">${task.status === 'active' ? t.taskStatusActive : t.taskStatusHidden}</span>
                </div>
                <div class="request-card-meta">${t.taskReward}: ${formatRnx(task.reward, locale)}</div>
            `;
            bodyEl.appendChild(card);
        });
        return;
    }

    bodyEl.innerHTML = '';
    const userOperations = window.gameDB.getFinanceOperations().filter((item) => String(item.userId) === String(user.id));
    const userHeroOperations = window.gameDB.getHeroOperations().filter((item) => String(item.userId) === String(user.id));
    const userAudit = window.gameDB.getAdminLog().filter((item) => String(item.targetUserId) === String(user.id));
    const historyItems = [...userOperations, ...userHeroOperations, ...userAudit]
        .sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime())
        .slice(0, 12);

    if (!historyItems.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.userNoHistory;
        bodyEl.appendChild(empty);
        return;
    }

    historyItems.forEach((item) => {
        if ('status' in item) {
            bodyEl.appendChild(createFinanceOperationCard(item));
            return;
        }

        const card = document.createElement('div');
        card.className = 'request-card';
        card.innerHTML = `
            <div class="request-card-title">${getAuditTypeLabel(item.type, t)}</div>
            <div class="request-card-meta">${describeAuditEntry(item, locale) || '-'}</div>
            <div class="request-card-meta">${formatRegistrationDate(item.createdAt, locale)}</div>
        `;
        bodyEl.appendChild(card);
    });
}

function renderAdminUsersList() {
    const container = document.getElementById('admin-users-list');
    if (!container || !window.gameDB) return;
    const t = getTranslations();
    const query = APP_STATE.adminUserSearch;
    const users = window.gameDB.getAllUsers().filter((user) => {
        if (!query) return true;
        const haystack = `${user.id} ${user.username} ${user.name}`.toLowerCase();
        return haystack.includes(query);
    });

    container.innerHTML = '';
    if (!users.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noUsers;
        container.appendChild(empty);
        return;
    }

    users.forEach((user) => {
        const effectiveId = user.id || '__current__';
        const isCurrentUser = String(effectiveId) === String(window.gameDB.getUser().id || '');
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
            <div class="user-card-head">
                <div>
                    <div class="user-card-name">${user.name || 'User'}</div>
                    <div class="user-card-meta">ID ${user.id || '-'} · ${user.username || '@user'}</div>
                    <div class="user-card-meta">${Number(user.balanceBuy || 0).toFixed(2)} TON · ${getTranslations().levelLabel}: ${user.stats?.level || 1}</div>
                </div>
                <span class="status-chip ${user.isAdmin ? 'approved' : 'pending'}">${user.isAdmin ? t.accessAdmin : t.accessUser}</span>
            </div>
        `;

        const actions = document.createElement('div');
        actions.className = 'request-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn';
        editBtn.type = 'button';
        editBtn.textContent = t.userCardTitle;
        editBtn.addEventListener('click', () => openUserDetailModal(effectiveId));

        const balanceBtn = document.createElement('button');
        balanceBtn.className = 'action-btn';
        balanceBtn.type = 'button';
        balanceBtn.textContent = t.adminAddBalanceButton;
        balanceBtn.addEventListener('click', () => openAdminBalanceModal('add', effectiveId));

        const heroBtn = document.createElement('button');
        heroBtn.className = 'action-btn';
        heroBtn.type = 'button';
        heroBtn.textContent = t.adminGrantHeroButton;
        heroBtn.addEventListener('click', () => openGrantHeroModal(effectiveId));

        const accessBtn = document.createElement('button');
        accessBtn.className = `action-btn ${user.isAdmin ? 'action-btn-danger' : ''}`;
        accessBtn.type = 'button';
        accessBtn.textContent = user.isAdmin ? t.adminRevokeAccessButton : t.adminGrantAccessButton;
        accessBtn.disabled = isCurrentUser;
        accessBtn.addEventListener('click', () => openAdminAccessModal(effectiveId, user.isAdmin ? 'disabled' : 'enabled'));

        actions.appendChild(editBtn);
        actions.appendChild(balanceBtn);
        actions.appendChild(heroBtn);
        actions.appendChild(accessBtn);
        card.appendChild(actions);
        container.appendChild(card);
    });
}

function renderAdminTasksList() {
    const container = document.getElementById('admin-tasks-list');
    if (!container || !window.gameDB) return;
    const t = getTranslations();
    const tasks = window.gameDB.getTasks();
    container.innerHTML = '';

    if (!tasks.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = t.noTasks;
        container.appendChild(empty);
        return;
    }

    tasks.forEach((task) => {
        const card = document.createElement('div');
        card.className = 'request-card';
        card.innerHTML = `
            <div class="request-card-head">
                <div>
                    <div class="request-card-title">${task.title}</div>
                    <div class="request-card-meta">${task.description}</div>
                    <div class="request-card-meta">${t.taskReward}: ${formatRnx(task.reward, LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU')}</div>
                </div>
                <span class="status-chip ${task.status === 'active' ? 'approved' : 'rejected'}">${task.status === 'active' ? t.taskStatusActive : t.taskStatusHidden}</span>
            </div>
        `;

        const actions = document.createElement('div');
        actions.className = 'request-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn';
        editBtn.type = 'button';
        editBtn.textContent = t.editAction;
        editBtn.addEventListener('click', () => openAddTaskModal(task.id));

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'action-btn';
        toggleBtn.type = 'button';
        toggleBtn.textContent = task.status === 'active' ? t.disableAction : t.enableAction;
        toggleBtn.addEventListener('click', () => toggleTaskStatus(task.id));

        actions.appendChild(editBtn);
        actions.appendChild(toggleBtn);
        card.appendChild(actions);
        container.appendChild(card);
    });
}

function getEnabledMethods(type) {
    const t = getTranslations();
    const finance = window.gameDB.getFinanceConfig();
    const map = {
        card: t.methodCard,
        crypto: t.methodCrypto,
        telegram: t.methodTelegram,
        ton: t.methodTon || 'TON',
        usdt_bep20: t.methodUsdtBep20 || 'USDT BEP-20',
        usdt_trc20: t.methodUsdtTrc20 || 'USDT TRC-20',
        tron_trx: t.methodTronTrx || 'TRON-TRX'
    };

    return Object.entries(finance[type].methods)
        .filter(([, enabled]) => Boolean(enabled))
        .map(([key]) => ({ value: key, label: map[key] || key }));
}

function openFinanceRequestModal(type) {
    const t = getTranslations();
    const user = window.gameDB.getUser();
    const title = type === 'deposit' ? t.depositPrompt : t.withdrawPrompt;
    const finance = window.gameDB.getFinanceConfig()[type];
    const methods = getEnabledMethods(type);
    const networkFee = window.gameDB.getNetworkFee();

    if (!methods.length) {
        return showNotification(t.disabledLabel, 'error');
    }

    const feeNote = type === 'withdraw' ? `\n${t.networkFeeLabel}: ${networkFee} TON` : '';

    window.openFormModal({
        title,
        sectionLabel: t.modalSectionFinance,
        fields: [
            { name: 'amount', label: `${t.amountLabel} (${finance.min}-${finance.max} TON)${feeNote}`, type: 'number', placeholder: String(finance.min), required: true },
            {
                name: 'method',
                label: t.methodLabel,
                type: 'select',
                value: methods[0].value,
                options: methods
            },
            { name: 'requisites', label: t.detailsLabel, type: 'text', placeholder: type === 'withdraw' ? 'TON wallet address' : '' },
            { name: 'comment', label: t.commentLabel, type: 'textarea', placeholder: '' }
        ],
        onConfirm: (values) => {
            const amount = Number(values.amount || 0);
            if (!Number.isFinite(amount) || amount <= 0) {
                return showNotification(t.formValidationError, 'error');
            }
            if (amount < finance.min || amount > finance.max) {
                return showNotification(`${t.amountLabel}: ${finance.min}-${finance.max} TON`, 'error');
            }
            if (type === 'withdraw') {
                const totalNeeded = amount + networkFee;
                if (Number(user.balanceWithdraw || 0) < totalNeeded) {
                    return showNotification(t.notEnough, 'error');
                }
            }

            window.gameDB.createRequest({
                type,
                userId: user.id,
                username: user.username,
                amount,
                method: values.method,
                requisites: values.requisites,
                comment: values.comment
            });

            if (type === 'deposit') {
                window.gameDB.applyReferralDepositBonus(user.id, amount);
            }

            renderApp();
            showNotification(t.requestCreated, 'success');
        }
    });
}

function openAdminBalanceModal(mode, presetTargetId = '') {
    const t = getTranslations();
    const isAdd = mode === 'add';

    window.openFormModal({
        title: isAdd ? t.adminAddBalanceTitle : t.adminSubtractBalanceTitle,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'target', label: t.targetUserLabel, type: 'text', placeholder: t.targetUserPlaceholder, value: presetTargetId || '' },
            { name: 'amount', label: t.amountLabel, type: 'number', placeholder: isAdd ? '100' : '50', required: true },
            { name: 'reason', label: t.reasonLabel, type: 'textarea', placeholder: '' }
        ],
        onConfirm: (values) => {
            const amount = Number(values.amount || 0);
            const targetId = String((values.target || window.gameDB.getUser().id || '').trim());
            if (!targetId || !Number.isFinite(amount) || amount <= 0) {
                return showNotification(t.formValidationError, 'error');
            }

            const result = window.gameDB.adjustBalanceById(targetId, isAdd ? amount : -amount, {
                adminId: window.gameDB.getUser().id,
                reason: values.reason,
                countAsDeposit: isAdd,
                countAsWithdraw: !isAdd
            });

            if (!result.success) {
                return showNotification(t.notEnough, 'error');
            }

            renderApp();
            showNotification(isAdd ? t.addedBalance : t.subtractedBalance, 'success');
        }
    });
}

function openGrantHeroModal(presetTargetId = '') {
    const t = getTranslations();
    const heroText = getHeroTextSet();

    window.openFormModal({
        title: t.adminGrantHeroTitle,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'target', label: t.targetUserLabel, type: 'text', placeholder: t.targetUserPlaceholder, required: true, value: presetTargetId || '' },
            {
                name: 'heroId',
                label: t.heroLabel,
                type: 'select',
                value: HEROES[0]?.id,
                options: HEROES.map((hero) => {
                    const localizedHero = getLocalizedHeroData(hero);
                    return { value: hero.id, label: `${localizedHero.name} · ${getHeroRarityLabel(hero.rarityKey)} · $${hero.price}` };
                })
            },
            { name: 'startLevel', label: heroText.startLevel, type: 'number', value: 1, required: true },
            { name: 'reason', label: t.reasonLabel, type: 'textarea', placeholder: '' }
        ],
        onConfirm: (values) => {
            const hero = getLocalizedHeroData(HEROES.find((item) => item.id === values.heroId));
            const targetId = String((values.target || '').trim());
            if (!hero || !targetId) {
                return showNotification(t.formValidationError, 'error');
            }

            const result = window.gameDB.addHeroToUser(targetId, hero, {
                adminId: window.gameDB.getUser().id,
                reason: values.reason,
                startLevel: Number(values.startLevel || 1)
            });

            if (!result.success) {
                return showNotification(t.formValidationError, 'error');
            }

            renderApp();
            showNotification(t.grantedHero, 'success');
        }
    });
}

function openAdminAccessModal(presetTargetId = '', presetAccess = 'enabled') {
    const t = getTranslations();
    window.openFormModal({
        title: t.adminGrantAccessTitle,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'target', label: t.targetUserLabel, type: 'text', placeholder: t.targetUserPlaceholder, required: true, value: presetTargetId || '' },
            {
                name: 'isAdmin',
                label: t.adminAccessLabel,
                type: 'select',
                value: presetAccess,
                options: [
                    { value: 'enabled', label: t.adminGrantAccessButton },
                    { value: 'disabled', label: t.adminRevokeAccessButton }
                ]
            },
            { name: 'reason', label: t.reasonLabel, type: 'textarea', placeholder: '' }
        ],
        onConfirm: (values) => {
            const targetId = String((values.target || '').trim());
            if (!targetId) {
                return showNotification(t.formValidationError, 'error');
            }

            const nextAccess = values.isAdmin === 'enabled';
            const result = window.gameDB.setAdminAccessById(targetId, nextAccess, {
                adminId: String(window.gameDB.getUser().id || ''),
                reason: values.reason || ''
            });

            if (!result.success) {
                return showNotification(t.noUsers, 'error');
            }

            renderApp();
            showNotification(nextAccess ? t.accessGranted : t.accessRevoked, 'success', {
                title: `${t.targetUserLabel}: ${targetId}`
            });
            showNotification(t.accessGrantedLocalOnly, 'info', {
                title: nextAccess ? t.adminGrantAccessTitle : t.adminRevokeAccessButton
            });
        }
    });
}

function openOnlineEditModal() {
    const t = getTranslations();
    window.openFormModal({
        title: t.adminOnlineTitle,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'count', label: t.onlineCountLabel, type: 'number', value: window.gameDB.getOnlineCount(), required: true }
        ],
        onConfirm: (values) => {
            window.gameDB.setOnlineCount(Number(values.count || 0));
            window.gameDB.createAdminLog({
                type: 'online-updated',
                adminId: String(window.gameDB.getUser().id || ''),
                reason: `online=${Number(values.count || 0)}`
            });
            renderApp();
            showNotification(t.updatedOnline, 'success', {
                title: `${t.onlineCountLabel}: ${Number(values.count || 0)}`
            });
            showNotification(t.onlineUpdatedLocalOnly, 'info', {
                title: t.adminOnlineTitle
            });
        }
    });
}

function resolveRequest(requestId, action) {
    const t = getTranslations();
    window.openFormModal({
        title: action === 'approve' ? t.statusApproved : t.statusRejected,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'comment', label: t.commentLabel, type: 'textarea', placeholder: '' }
        ],
        onConfirm: (values) => {
            const result = action === 'approve'
                ? window.gameDB.approveRequest(requestId, window.gameDB.getUser().id, values.comment)
                : window.gameDB.rejectRequest(requestId, window.gameDB.getUser().id, values.comment);

            if (!result.success) {
                return showNotification(t.notEnough, 'error');
            }

            renderApp();
            showNotification(action === 'approve' ? t.requestApproved : t.requestRejected, 'success');
        }
    });
}

function openFinanceSettingsModal() {
    const t = getTranslations();
    const finance = window.gameDB.getFinanceConfig();
    window.openFormModal({
        title: t.manageFinanceTitle,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'rnxRate', label: 'Курс $RNX за 1 TON', type: 'number', value: finance.rnxRate || 10000, required: true },
            { name: 'networkFee', label: `${t.networkFeeLabel} (TON)`, type: 'number', value: finance.networkFee != null ? finance.networkFee : 0.1, required: true },
            { name: 'depositMin', label: `${t.depositLimitsTitle} · ${t.minAmountLabel} (TON)`, type: 'number', value: finance.deposit.min, required: true },
            { name: 'depositMax', label: `${t.depositLimitsTitle} · ${t.maxAmountLabel} (TON)`, type: 'number', value: finance.deposit.max, required: true },
            { name: 'depositTon', label: `${t.depositLimitsTitle} · TON`, type: 'select', value: finance.deposit.methods.ton ? 'enabled' : 'disabled', options: [{ value: 'enabled', label: t.enabledLabel }, { value: 'disabled', label: t.disabledLabel }] },
            { name: 'depositUsdtBep20', label: `${t.depositLimitsTitle} · USDT BEP-20`, type: 'select', value: finance.deposit.methods.usdt_bep20 ? 'enabled' : 'disabled', options: [{ value: 'enabled', label: t.enabledLabel }, { value: 'disabled', label: t.disabledLabel }] },
            { name: 'depositUsdtTrc20', label: `${t.depositLimitsTitle} · USDT TRC-20`, type: 'select', value: finance.deposit.methods.usdt_trc20 ? 'enabled' : 'disabled', options: [{ value: 'enabled', label: t.enabledLabel }, { value: 'disabled', label: t.disabledLabel }] },
            { name: 'depositTronTrx', label: `${t.depositLimitsTitle} · TRON-TRX`, type: 'select', value: finance.deposit.methods.tron_trx ? 'enabled' : 'disabled', options: [{ value: 'enabled', label: t.enabledLabel }, { value: 'disabled', label: t.disabledLabel }] },
            { name: 'withdrawMin', label: `${t.withdrawLimitsTitle} · ${t.minAmountLabel} (TON)`, type: 'number', value: finance.withdraw.min, required: true },
            { name: 'withdrawMax', label: `${t.withdrawLimitsTitle} · ${t.maxAmountLabel} (TON)`, type: 'number', value: finance.withdraw.max, required: true },
            { name: 'withdrawTon', label: `${t.withdrawLimitsTitle} · TON`, type: 'select', value: finance.withdraw.methods.ton ? 'enabled' : 'disabled', options: [{ value: 'enabled', label: t.enabledLabel }, { value: 'disabled', label: t.disabledLabel }] }
        ],
        onConfirm: (values) => {
            window.gameDB.updateFinanceConfig({
                rnxRate: Number(values.rnxRate || 10000),
                networkFee: Number(values.networkFee || 0.1),
                deposit: {
                    min: Number(values.depositMin),
                    max: Number(values.depositMax),
                    methods: {
                        ton: values.depositTon === 'enabled',
                        usdt_bep20: values.depositUsdtBep20 === 'enabled',
                        usdt_trc20: values.depositUsdtTrc20 === 'enabled',
                        tron_trx: values.depositTronTrx === 'enabled'
                    }
                },
                withdraw: {
                    min: Number(values.withdrawMin),
                    max: Number(values.withdrawMax),
                    methods: {
                        ton: values.withdrawTon === 'enabled'
                    }
                }
            });
            window.gameDB.createAdminLog({
                type: 'finance-settings-updated',
                adminId: String(window.gameDB.getUser().id || ''),
                reason: 'deposit/withdraw settings changed'
            });
            renderApp();
            showNotification(t.settingsSaved, 'success');
        }
    });
}

function openAddTaskModal(taskId = '') {
    const t = getTranslations();
    const existingTask = taskId ? window.gameDB.getTaskById(taskId) : null;
    window.openFormModal({
        title: existingTask ? t.editAction : t.addTaskTitle,
        sectionLabel: t.modalSectionTasks,
        fields: [
            { name: 'title', label: t.taskTitleLabel, type: 'text', placeholder: '', required: true, value: existingTask?.title || '' },
            { name: 'description', label: t.taskDescriptionLabel, type: 'textarea', placeholder: '', required: true, value: existingTask?.description || '' },
            { name: 'reward', label: t.taskRewardLabel, type: 'number', placeholder: '100', required: true, value: existingTask?.reward || 0 }
        ],
        onConfirm: (values) => {
            if (existingTask) {
                window.gameDB.updateTask(existingTask.id, {
                    title: values.title,
                    description: values.description,
                    reward: Number(values.reward || 0)
                });
                window.gameDB.createAdminLog({
                    type: 'task-updated',
                    adminId: String(window.gameDB.getUser().id || ''),
                    taskId: existingTask.id,
                    taskTitle: values.title,
                    reason: values.description
                });
            } else {
                const task = window.gameDB.createTask({
                    title: values.title,
                    description: values.description,
                    reward: Number(values.reward || 0),
                    status: 'active'
                });
                window.gameDB.createAdminLog({
                    type: 'task-created',
                    adminId: String(window.gameDB.getUser().id || ''),
                    taskId: task.id,
                    taskTitle: task.title,
                    reason: task.description
                });
            }
            renderApp();
            showNotification(existingTask ? t.taskUpdated : t.taskCreated, 'success');
        }
    });
}

function toggleTaskStatus(taskId) {
    const t = getTranslations();
    const task = window.gameDB.getTaskById(taskId);
    if (!task) return;
    const nextStatus = task.status === 'active' ? 'hidden' : 'active';
    window.gameDB.updateTask(taskId, { status: nextStatus });
    window.gameDB.createAdminLog({
        type: 'task-status-updated',
        adminId: String(window.gameDB.getUser().id || ''),
        taskId: task.id,
        taskTitle: task.title,
        reason: nextStatus
    });
    renderApp();
    showNotification(t.taskUpdated, 'success');
}

function openEditUserModal(userId) {
    const t = getTranslations();
    const user = window.gameDB.getUserById(userId);
    if (!user) {
        return showNotification(t.noUsers, 'error');
    }

    window.openFormModal({
        title: `${t.editProfileTitle} · ${user.id || '-'}`,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'name', label: t.profileNameLabel, type: 'text', required: true, value: user.name || '' },
            { name: 'username', label: t.profileUsernameLabel, type: 'text', value: user.username || '' },
            { name: 'balanceBuy', label: t.balanceBuyLabel, type: 'number', required: true, value: user.balanceBuy || 0 },
            { name: 'balanceWithdraw', label: t.balanceWithdrawLabel, type: 'number', required: true, value: user.balanceWithdraw || 0 },
            { name: 'rnxBalance', label: t.rnxBalanceLabel, type: 'number', required: true, value: user.rnxBalance || 0 },
            { name: 'level', label: t.levelLabel, type: 'number', required: true, value: user.stats?.level || 1 },
            { name: 'invited', label: t.invitedLabel, type: 'number', required: true, value: user.stats?.invited || 0 },
            { name: 'deposited', label: t.depositedLabel, type: 'number', required: true, value: user.stats?.deposited || 0 },
            { name: 'withdrawn', label: t.withdrawnLabel, type: 'number', required: true, value: user.stats?.withdrawn || 0 },
            { name: 'ratingPosition', label: t.ratingPositionLabel, type: 'number', required: true, value: user.rating?.position || 0 },
            { name: 'ratingScore', label: t.ratingScoreLabel, type: 'number', required: true, value: user.rating?.score || 0 },
            {
                name: 'isAdmin',
                label: t.adminAccessLabel,
                type: 'select',
                value: user.isAdmin ? 'enabled' : 'disabled',
                options: [{ value: 'enabled', label: t.enabledLabel }, { value: 'disabled', label: t.disabledLabel }]
            }
        ],
        onConfirm: (values) => {
            window.gameDB.updateUserById(userId, {
                name: values.name,
                username: values.username,
                balanceBuy: Number(values.balanceBuy || 0),
                balanceWithdraw: Number(values.balanceWithdraw || 0),
                rnxBalance: Number(values.rnxBalance || 0),
                isAdmin: values.isAdmin === 'enabled',
                rating: {
                    position: Number(values.ratingPosition || 0),
                    score: Number(values.ratingScore || 0)
                },
                stats: {
                    ...user.stats,
                    level: Number(values.level || 1),
                    invited: Number(values.invited || 0),
                    deposited: Number(values.deposited || 0),
                    withdrawn: Number(values.withdrawn || 0)
                }
            });
            window.gameDB.createAdminLog({
                type: 'profile-updated',
                adminId: String(window.gameDB.getUser().id || ''),
                targetUserId: String(userId || ''),
                reason: `${values.name} · ${values.username || '@user'}`
            });
            renderApp();
            renderUserDetailModal();
            showNotification(t.saveProfileDone, 'success');
        }
    });
}

function openExchangeModal() {
    const t = getTranslations();
    const user = window.gameDB.getUser();
    const rate = window.gameDB.getRnxRate();
    window.openFormModal({
        title: t.exchangeTitle,
        sectionLabel: t.exchangeRate,
        fields: [
            { name: 'amount', label: `${t.exchangeAmountLabel} (${t.rnxBalanceLabel}: ${formatNumber(user.rnxBalance, 'ru-RU')})`, type: 'number', placeholder: String(rate), required: true }
        ],
        confirmText: t.exchangeButton,
        onConfirm: (values) => {
            const amount = Number(values.amount || 0);
            if (!Number.isFinite(amount) || amount <= 0) {
                return showNotification(t.formValidationError, 'error');
            }
            const result = window.gameDB.exchangeRnxToTon(user.id || '__current__', amount);
            if (!result.success) {
                return showNotification(t.insufficientRnx, 'error');
            }
            renderApp();
            showNotification(`${t.exchangeSuccess}: +${result.halfTon.toFixed(4)} TON ${t.balanceBuyLabel}, +${result.halfTon.toFixed(4)} TON ${t.balanceWithdrawLabel}`, 'success');
        }
    });
}

function openPromoCodeModal() {
    const t = getTranslations();
    const user = window.gameDB.getUser();
    window.openFormModal({
        title: t.promoTitle,
        sectionLabel: t.promoSubtitle,
        fields: [
            { name: 'code', label: t.promoInputLabel, type: 'text', required: true, placeholder: 'XXXXXX' }
        ],
        confirmText: t.promoActivateBtn,
        onConfirm: (values) => {
            const result = window.gameDB.redeemPromoCode(user.id || '__current__', values.code);
            if (!result.success) {
                const msgMap = { 'not-found': t.promoNotFound, 'already-used': t.promoAlreadyUsed, 'expired': t.promoExpired };
                return showNotification(msgMap[result.reason] || t.promoNotFound, 'error');
            }
            renderApp();
            showNotification(t.promoSuccess, 'success');
        }
    });
}

function openAdminCreatePromoModal() {
    const t = getTranslations();
    window.openFormModal({
        title: t.adminCreatePromoTitle,
        sectionLabel: t.modalSectionAdmin,
        fields: [
            { name: 'code', label: t.promoCodeLabel, type: 'text', required: true, placeholder: 'MYCODE' },
            { name: 'rewardRnx', label: t.promoRewardRnxLabel, type: 'number', value: 1000 },
            { name: 'rewardTon', label: t.promoRewardTonLabel, type: 'number', value: 0 },
            { name: 'maxUses', label: t.promoMaxUsesLabel, type: 'number', value: 100, required: true }
        ],
        onConfirm: (values) => {
            if (!values.code) return showNotification(t.formValidationError, 'error');
            window.gameDB.createPromoCode({
                code: values.code,
                rewardRnx: Number(values.rewardRnx || 0),
                rewardTon: Number(values.rewardTon || 0),
                maxUses: Number(values.maxUses || 1)
            });
            window.gameDB.createAdminLog({
                type: 'promo-created',
                adminId: String(window.gameDB.getUser().id || ''),
                reason: `code: ${values.code}`
            });
            renderApp();
            showNotification(t.promoCreated, 'success');
        }
    });
}

function renderReferralSection() {
    const container = document.getElementById('referral-content');
    if (!container || !window.gameDB) return;

    const t = getTranslations();
    const user = window.gameDB.getUser();
    const config = window.gameDB.getReferralConfig();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';

    if (!user.referralCode && user.id) {
        window.gameDB.generateReferralCode(user.id || '__current__');
    }
    const freshUser = window.gameDB.getUser();

    const levelsHtml = (config.levels || []).map((lvl) =>
        `<div class="summary-row"><span>${t.referralLevel} ${lvl.level}</span><strong>${lvl.percentage}%</strong></div>`
    ).join('');

    container.innerHTML = `
        <div class="referral-code-block">
            <div class="info-card">
                <span class="info-label">${t.referralCodeLabel}</span>
                <strong class="info-value referral-code-value" id="referral-code-display">${freshUser.referralCode || '—'}</strong>
                <button class="action-btn referral-copy-btn" id="referral-copy-btn" type="button">${t.referralCopyBtn}</button>
            </div>
        </div>
        <div class="stats-grid referral-stats">
            <div class="info-card">
                <span class="info-label">${t.referralCountLabel}</span>
                <strong class="info-value">${formatNumber(freshUser.stats?.referrals || 0, locale)}</strong>
            </div>
            <div class="info-card">
                <span class="info-label">${t.referralEarningsLabel}</span>
                <strong class="info-value">${Number(freshUser.referralEarnings || 0).toFixed(2)} TON</strong>
            </div>
        </div>
        <div class="summary-card referral-levels-card">
            <div class="request-card-title">${t.referralLevelsTitle}</div>
            ${levelsHtml}
            <div class="summary-row"><span>${t.referralFixedReward}</span><strong>${formatNumber(config.fixedReward || 0, locale)} $RNX</strong></div>
        </div>
    `;

    const copyBtn = document.getElementById('referral-copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = freshUser.referralCode || '';
            if (code && navigator.clipboard) {
                navigator.clipboard.writeText(code).then(() => showNotification(t.referralCopied, 'success'));
            }
        });
    }
}

function renderPromoSection() {
    const container = document.getElementById('promo-content');
    if (!container) return;
    const t = getTranslations();
    container.innerHTML = `
        <div class="promo-input-block">
            <div class="form-field">
                <label>${t.promoInputLabel}</label>
                <input type="text" id="promo-input-field" placeholder="XXXXXX" />
            </div>
            <button class="action-btn promo-activate-btn" id="promo-activate-btn" type="button">${t.promoActivateBtn}</button>
        </div>
    `;
    const activateBtn = document.getElementById('promo-activate-btn');
    if (activateBtn) {
        activateBtn.addEventListener('click', () => {
            const input = document.getElementById('promo-input-field');
            const code = input ? input.value : '';
            if (!code) return;
            const user = window.gameDB.getUser();
            const result = window.gameDB.redeemPromoCode(user.id || '__current__', code);
            if (!result.success) {
                const msgMap = { 'not-found': t.promoNotFound, 'already-used': t.promoAlreadyUsed, 'expired': t.promoExpired };
                return showNotification(msgMap[result.reason] || t.promoNotFound, 'error');
            }
            if (input) input.value = '';
            renderApp();
            showNotification(t.promoSuccess, 'success');
        });
    }
}

function handleNavigation(type) {
    const shopSection = document.getElementById('shop-section');
    const profileSection = document.querySelector('.profile-panel');
    const myHeroesSection = document.getElementById('my-heroes-section');
    const tasksSection = document.getElementById('tasks-section');
    const historySection = document.getElementById('history-section');
    const auditSection = document.getElementById('audit-section');
    const referralSection = document.getElementById('referral-section');

    // Hide main panels
    if (shopSection) shopSection.classList.add('hidden');
    if (profileSection) profileSection.classList.add('hidden');
    if (myHeroesSection) myHeroesSection.classList.add('hidden');
    if (tasksSection) tasksSection.classList.add('hidden');
    if (historySection) historySection.classList.add('hidden');
    if (auditSection) auditSection.classList.add('hidden');
    if (referralSection) referralSection.classList.add('hidden');

    if (type === 'profile') {
        if (profileSection) showAppView(profileSection);
        return;
    }

    if (type === 'shop') {
        if (shopSection) {
            showAppView(shopSection);
            renderShop();
        }
        return;
    }

    // Перенос раздела "Мої герої" в навигацию "Шахты"
    if (type === 'mines') {
        if (myHeroesSection) {
            showAppView(myHeroesSection);
            renderMyHeroes();
        }
        return;
    }

    if (type === 'tasks') {
        if (tasksSection) {
            showAppView(tasksSection);
            renderTasks();
        }
        return;
    }

    if (type === 'referral') {
        if (referralSection) {
            showAppView(referralSection);
            renderReferralSection();
            renderPromoSection();
        }
        return;
    }

    if (type === 'menu') {
        if (historySection) {
            showAppView(historySection);
            renderHistorySection();
        }
        return;
    }

    showNotification(getTranslations().comingSoon, 'info');
}

function setActiveNavButton(type) {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach((button) => {
        const isActive = button.dataset.nav === type;

        button.classList.toggle('active', isActive);

        if (isActive) {
            button.classList.remove('nav-switch');
            void button.offsetWidth;
            button.classList.add('nav-switch');
        } else {
            button.classList.remove('nav-switch');
        }
    });
}

function showAppView(element) {
    if (!element) return;
    element.classList.remove('hidden');
    element.classList.remove('section-enter');
    void element.offsetWidth;
    element.classList.add('section-enter');
}

function openAuditScreen() {
    closeAdminModal();
    setActiveNavButton('menu');
    handleNavigation('menu');
    const historySection = document.getElementById('history-section');
    const auditSection = document.getElementById('audit-section');
    if (historySection) historySection.classList.add('hidden');
    if (auditSection) showAppView(auditSection);
    renderAuditSection();
}

function populateAdminModal() {
    const stats = window.gameDB.getDatabaseStats();
    const t = getTranslations();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';

    setText('admin-total-users', formatNumber(stats.totalUsers, locale));
    setText('admin-last-updated', new Date(stats.lastUpdated).toLocaleString(locale));
    setText('admin-version', stats.version);
    setText('admin-access', stats.isAdmin ? t.accessAdmin : t.accessUser);
    renderFinanceSummary();
    renderAdminUsersList();
    renderAdminRequestList();
    renderAdminLogList();
    renderAdminTasksList();
    renderAdminSupportList();
}

function closeAdminModal() {
    const adminModal = document.getElementById('admin-modal');
    if (adminModal) {
        adminModal.classList.add('hidden');
    }
    syncModalState();
}

function exportData() {
    const data = window.gameDB.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'game-data-backup.json';
    link.click();

    URL.revokeObjectURL(url);
    showNotification(getTranslations().exportDone, 'success');
}

function showNotification(message, type = 'info', options = {}) {
    const container = document.getElementById('toast-container');
    const t = getTranslations();

    if (!container) {
        return;
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const title = options.title || (type === 'success' ? t.statusApproved : type === 'error' ? t.statusRejected : type === 'support' ? t.supportTitle : t.notificationsTitle);
    toast.innerHTML = `
        <div class="toast-title">
            <span class="toast-icon">${getNotificationIcon(type)}</span>
            <span>${title}</span>
        </div>
        <div class="toast-message">${message}</div>
    `;
    container.appendChild(toast);

    window.setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate3d(18px, -14px, 0) scale(0.96)';
        window.setTimeout(() => toast.remove(), 220);
    }, 2600);
}

function getCurrentLanguage() {
    const settings = window.gameDB ? window.gameDB.getSettings() : { language: 'ru' };
    return LOCALES[settings.language] ? settings.language : 'ru';
}

function getTranslations(language = getCurrentLanguage()) {
    return LOCALES[language] || LOCALES.ru;
}

function triggerHaptic(level) {
    if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback &&
        typeof window.Telegram.WebApp.isVersionAtLeast === 'function' &&
        window.Telegram.WebApp.isVersionAtLeast('6.1')
    ) {
        window.Telegram.WebApp.HapticFeedback.impactOccurred(level);
    }
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function formatNumber(value, locale) {
    return new Intl.NumberFormat(locale).format(Number(value) || 0);
}

function formatCurrency(value, locale) {
    return `${formatNumber(value, locale)} TON`;
}

function formatRnx(value, locale) {
    return `${formatNumber(value, locale)} $RNX`;
}

function formatRegistrationDate(value, locale) {
    if (!value) {
        return new Date().toLocaleDateString(locale);
    }

    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
        return parsed.toLocaleDateString(locale);
    }

    return value;
}

function getInitials(name, username) {
    const source = (name || username || 'U').trim();
    const parts = source.replace('@', '').split(/\s+/).filter(Boolean);

    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0] || ''}${parts[1][0] || ''}`.toUpperCase();
}

// === Hero shop data and functions ===
function createHeroArtwork(hero) {
    const language = getCurrentLanguage();
    const roleLabel = typeof hero.role === 'object' ? (hero.role[language] || hero.role.ru || '') : hero.role;
    const nameLabel = typeof hero.name === 'object' ? (hero.name[language] || hero.name.ru || 'Hero') : hero.name;
    const initials = (nameLabel || 'H')
        .split(/\s+/)
        .map((part) => part[0] || '')
        .join('')
        .slice(0, 2)
        .toUpperCase();

    const motifMap = {
        h1: {
            atmosphere: 'M0 0H800V330C702 254 599 222 502 236C405 249 324 300 216 314C146 323 76 313 0 286Z',
            figure: 'M424 145C463 145 493 176 493 214C493 242 477 266 453 279L483 412H372L396 280C370 266 353 242 353 214C353 176 384 145 424 145Z',
            accent: 'M313 407L430 229L539 407Z'
        },
        h2: {
            atmosphere: 'M0 0H800V298C729 315 649 309 562 280C477 251 406 201 316 195C213 187 113 229 0 271Z',
            figure: 'M441 130L508 190L451 230L522 295L448 311L438 412H360L350 311L276 295L347 230L290 190L357 130Z',
            accent: 'M180 402C242 323 297 286 357 256L343 413H170Z'
        },
        h3: {
            atmosphere: 'M0 0H800V308C698 244 590 235 489 277C396 315 332 373 231 383C150 390 78 366 0 316Z',
            figure: 'M404 146C443 146 473 176 473 214C473 245 452 271 423 279V410H384V279C354 271 334 245 334 214C334 176 365 146 404 146Z',
            accent: 'M274 244L343 219L404 118L466 219L536 244L462 297L478 381L404 341L331 381L345 297Z'
        },
        h4: {
            atmosphere: 'M0 0H800V302C721 280 646 245 570 213C479 175 392 164 297 188C194 215 98 276 0 336Z',
            figure: 'M401 130C455 130 503 167 517 219C497 232 475 242 451 248L466 412H336L351 248C327 242 304 232 285 219C299 167 347 130 401 130Z',
            accent: 'M213 420C308 313 389 270 402 268C415 270 497 313 590 420Z'
        },
        h5: {
            atmosphere: 'M0 0H800V310C713 289 640 281 554 300C457 320 382 376 280 389C181 402 91 374 0 328Z',
            figure: 'M403 126L463 169L509 242L470 257L492 412H314L336 257L297 242L343 169Z',
            accent: 'M323 110L370 72H436L484 110L450 150H356Z'
        },
        h6: {
            atmosphere: 'M0 0H800V290C710 247 622 227 532 240C438 254 360 306 268 324C174 344 90 326 0 270Z',
            figure: 'M402 106C454 106 500 140 516 189L471 207L440 412H364L333 207L288 189C304 140 350 106 402 106Z',
            accent: 'M402 54L434 128L514 136L454 190L474 270L402 226L330 270L350 190L290 136L370 128Z'
        }
    };
    const motif = motifMap[hero.id] || motifMap.h1;

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="${hero.palette[0]}" />
                    <stop offset="100%" stop-color="${hero.palette[1]}" />
                </linearGradient>
                <radialGradient id="glow" cx="50%" cy="35%" r="60%">
                    <stop offset="0%" stop-color="${hero.palette[2]}" stop-opacity="0.95" />
                    <stop offset="100%" stop-color="${hero.palette[2]}" stop-opacity="0" />
                </radialGradient>
                <linearGradient id="figure" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.92)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0.22)" />
                </linearGradient>
                <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.28)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0.05)" />
                </linearGradient>
            </defs>
            <rect width="800" height="560" rx="42" fill="url(#bg)" />
            <rect x="22" y="22" width="756" height="516" rx="34" fill="none" stroke="url(#frame)" stroke-width="2.5" />
            <circle cx="592" cy="152" r="168" fill="url(#glow)" />
            <path d="${motif.atmosphere}" fill="rgba(255,255,255,0.08)" />
            <path d="M0 458C137 388 245 372 343 392C448 413 560 476 800 408V560H0Z" fill="rgba(7,17,29,0.52)" />
            <path d="${motif.accent}" fill="${hero.palette[2]}" fill-opacity="0.72" />
            <path d="${motif.figure}" fill="url(#figure)" />
            <rect x="54" y="54" width="128" height="128" rx="32" fill="rgba(8,17,31,0.28)" stroke="rgba(255,255,255,0.18)" />
            <text x="118" y="136" font-size="58" text-anchor="middle" font-family="Space Grotesk, Arial, sans-serif" font-weight="700" fill="#ffffff">${initials}</text>
            <rect x="46" y="420" width="708" height="94" rx="28" fill="rgba(8,17,31,0.42)" stroke="rgba(255,255,255,0.08)" />
            <text x="74" y="455" font-size="22" font-family="Manrope, Arial, sans-serif" font-weight="700" fill="rgba(255,255,255,0.76)">${roleLabel}</text>
            <text x="74" y="496" font-size="38" font-family="Space Grotesk, Arial, sans-serif" font-weight="700" fill="#ffffff">${nameLabel}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createHeroTemplate(hero) {
    return {
        ...hero,
        image: hero.image || createHeroArtwork(hero)
    };
}

const HEROES = [
    createHeroTemplate({ id: 'h1', name: { ru: 'Бастион Пепла', ua: 'Бастіон Попелу' }, role: { ru: 'Авангард', ua: 'Авангард' }, rarityKey: 'common', price: 80, baseProfitPerHour: 6, durationHours: 24, growthRate: 0.18, baseUpgradePrice: 40, description: { ru: 'Стартовый герой для стабильного фарма. Невысокая цена входа и быстрый возврат инвестиций.', ua: 'Стартовий герой для стабільного фарму. Невисока ціна входу і швидке повернення інвестицій.' }, palette: ['#1d3557', '#457b9d', '#f4a261'] }),
    createHeroTemplate({ id: 'h2', name: { ru: 'Ледяной Следопыт', ua: 'Крижаний Слідопит' }, role: { ru: 'Контроль', ua: 'Контроль' }, rarityKey: 'rare', price: 180, baseProfitPerHour: 14, durationHours: 36, growthRate: 0.21, baseUpgradePrice: 78, description: { ru: 'Редкий герой с усиленным ростом дохода. Лучше раскрывается после первых улучшений.', ua: 'Рідкісний герой із посиленим ростом доходу. Краще розкривається після перших покращень.' }, palette: ['#14213d', '#3a86ff', '#90e0ef'] }),
    createHeroTemplate({ id: 'h3', name: { ru: 'Арканный Кузнец', ua: 'Арканний Коваль' }, role: { ru: 'Ремесло', ua: 'Ремесло' }, rarityKey: 'rare', price: 260, baseProfitPerHour: 21, durationHours: 42, growthRate: 0.23, baseUpgradePrice: 112, description: { ru: 'Сильный средний тир для тех, кто хочет быстро набрать общий power level аккаунта.', ua: 'Сильний середній тир для тих, хто хоче швидко набрати загальний power level акаунта.' }, palette: ['#2b2d42', '#5a189a', '#ffb703'] }),
    createHeroTemplate({ id: 'h4', name: { ru: 'Фантом Штольни', ua: 'Фантом Штольні' }, role: { ru: 'Штурм', ua: 'Штурм' }, rarityKey: 'epic', price: 420, baseProfitPerHour: 34, durationHours: 48, growthRate: 0.27, baseUpgradePrice: 176, description: { ru: 'Эпический герой под агрессивную прокачку. Каждый уровень ощутимо поднимает доход.', ua: 'Епічний герой під агресивну прокачку. Кожен рівень помітно піднімає дохід.' }, palette: ['#0b132b', '#6d28d9', '#f472b6'] }),
    createHeroTemplate({ id: 'h5', name: { ru: 'Король Жил', ua: 'Король Жил' }, role: { ru: 'Командир', ua: 'Командир' }, rarityKey: 'epic', price: 690, baseProfitPerHour: 56, durationHours: 60, growthRate: 0.3, baseUpgradePrice: 288, description: { ru: 'Топовый командир для мидгейма с дорогим, но очень эффективным апгрейдом.', ua: 'Топовий командир для мідгейму з дорогим, але дуже ефективним апгрейдом.' }, palette: ['#111827', '#9a3412', '#fbbf24'] }),
    createHeroTemplate({ id: 'h6', name: { ru: 'Солнечный Архонт', ua: 'Сонячний Архонт' }, role: { ru: 'Легенда', ua: 'Легенда' }, rarityKey: 'legendary', price: 1100, baseProfitPerHour: 92, durationHours: 72, growthRate: 0.34, baseUpgradePrice: 470, description: { ru: 'Легендарный лейтгейм актив, на котором строится сильная экономика аккаунта.', ua: 'Легендарний лейтгейм актив, на якому будується сильна економіка акаунта.' }, palette: ['#1f2937', '#b91c1c', '#fde68a'] })
];

function getHeroById(heroId) {
    return HEROES.find((hero) => hero.id === heroId) || null;
}

function getPurchasedHeroes() {
    const user = window.gameDB.getUser();
    return Array.isArray(user.heroes) ? user.heroes : [];
}

function ensureShopFilters(container) {
    const section = document.getElementById('shop-section');
    if (!section || !container) return null;

    let filterBar = document.getElementById('shop-filters');
    if (!filterBar) {
        filterBar = document.createElement('div');
        filterBar.id = 'shop-filters';
        filterBar.className = 'history-filters shop-filters';
        container.parentNode.insertBefore(filterBar, container);
    }

    return filterBar;
}

function getFilteredHeroTemplates() {
    return HEROES.filter((hero) => APP_STATE.heroShopFilter === 'all' ? true : hero.rarityKey === APP_STATE.heroShopFilter);
}

function renderShop() {
    const container = document.getElementById('shop-container');
    if (!container) return;

    const heroText = getHeroTextSet();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const filterBar = ensureShopFilters(container);
    const filters = [
        { id: 'all', label: heroText.allRarities },
        { id: 'common', label: heroText.common },
        { id: 'rare', label: heroText.rare },
        { id: 'epic', label: heroText.epic },
        { id: 'legendary', label: heroText.legendary }
    ];

    if (filterBar) {
        filterBar.innerHTML = '';
        filters.forEach((filter) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `filter-chip${APP_STATE.heroShopFilter === filter.id ? ' active' : ''}`;
            button.textContent = filter.label;
            button.addEventListener('click', () => {
                APP_STATE.heroShopFilter = filter.id;
                renderShop();
            });
            filterBar.appendChild(button);
        });
    }

    const ownedHeroes = getPurchasedHeroes();
    const visibleHeroes = getFilteredHeroTemplates();
    container.innerHTML = '';

    visibleHeroes.forEach((hero) => {
        const localizedHero = getLocalizedHeroData(hero);
        const projectedHero = enrichHeroWithEconomy(window.gameDB.normalizeHero(localizedHero), ownedHeroes);
        const ownedCount = ownedHeroes.filter((item) => item.heroId === hero.id || item.id === hero.id).length;
        const detailsOpened = APP_STATE.selectedShopHeroId === hero.id;
        const card = document.createElement('article');
        card.className = `hero-card rarity-${hero.rarityKey}`;
        card.innerHTML = `
            <div class="hero-card-media">
                <img class="hero-img" src="${localizedHero.image}" alt="${localizedHero.name}">
                <span class="hero-rarity-chip rarity-${hero.rarityKey}">${getHeroRarityLabel(hero.rarityKey)}</span>
                <span class="hero-owned-chip">x${ownedCount}</span>
            </div>
            <div class="hero-card-body">
                <div class="hero-meta hero-meta-vertical">
                    <div>
                        <div class="hero-title">${localizedHero.name}</div>
                        <div class="hero-sub">${heroText.role}: ${localizedHero.role} · ${heroText.level}: 1</div>
                    </div>
                    <div class="hero-price-block">
                        <span class="hero-price-value">${formatCurrency(hero.price, locale)}</span>
                    </div>
                </div>
                <p class="hero-description">${localizedHero.description}</p>
                <div class="hero-stats-grid">
                    <div class="hero-stat-tile"><span>${heroText.currentIncome}</span><strong>${formatRnx(projectedHero.boostedProfitPerHour, locale)}</strong></div>
                    <div class="hero-stat-tile"><span>${heroText.totalIncome}</span><strong>${formatRnx(projectedHero.boostedTotalProfit, locale)}</strong></div>
                    <div class="hero-stat-tile"><span>${heroText.duration}</span><strong>${hero.durationHours}h</strong></div>
                    <div class="hero-stat-tile"><span>${heroText.nextUpgrade}</span><strong>${formatCurrency(projectedHero.nextUpgradeCost, locale)}</strong></div>
                </div>
                <div class="hero-actions-row">
                    <button class="hero-secondary-btn" type="button" data-hero-details="${hero.id}">${detailsOpened ? heroText.collapse : heroText.details}</button>
                    <button class="buy-btn" type="button" data-hero-buy="${hero.id}">${heroText.buy}</button>
                </div>
                ${detailsOpened ? `
                    <div class="hero-detail-panel">
                        <div class="hero-detail-line"><span>${heroText.detailsTitle}</span><strong>${localizedHero.description}</strong></div>
                        <div class="hero-detail-line"><span>${heroText.growth}</span><strong>+${Math.round((hero.growthRate || 0) * 100)}%</strong></div>
                        <div class="hero-detail-line"><span>${heroText.power}</span><strong>${formatNumber(hero.price + projectedHero.boostedTotalProfit, locale)}</strong></div>
                        <div class="hero-detail-line"><span>${heroText.synergy}</span><strong>+${Math.round(projectedHero.synergyBonus * 100)}%</strong></div>
                        <div class="hero-detail-line"><span>${heroText.source}</span><strong>${heroText.shopSource}</strong></div>
                    </div>
                ` : ''}
            </div>
        `;

        const detailsButton = card.querySelector('[data-hero-details]');
        if (detailsButton) {
            detailsButton.addEventListener('click', () => {
                APP_STATE.selectedShopHeroId = APP_STATE.selectedShopHeroId === hero.id ? '' : hero.id;
                renderShop();
            });
        }

        const buyButton = card.querySelector('[data-hero-buy]');
        if (buyButton) {
            buyButton.addEventListener('click', () => buyHero(hero.id));
        }

        container.appendChild(card);
    });
}

function buyHero(heroId) {
    const hero = getHeroById(heroId);
    const heroText = getHeroTextSet();
    if (!hero) {
        return showNotification(heroText.heroNotFound, 'error');
    }

    const user = window.gameDB.getUser();
    const localizedHero = getLocalizedHeroData(hero);
    const result = window.gameDB.buyHeroForUser(user.id || '__current__', localizedHero, { source: 'shop' });
    if (!result.success) {
        return showNotification(getTranslations().notEnough, 'error');
    }

    renderApp();
    renderShop();
    renderMyHeroes();
    showNotification(heroText.heroPurchased, 'success', { title: localizedHero.name });
}

function upgradeHero(heroInstanceId, userId = '__current__') {
    const heroText = getHeroTextSet();
    const result = window.gameDB.levelUpHeroForUser(userId, heroInstanceId, { source: 'upgrade' });
    if (!result.success) {
        return showNotification(getTranslations().notEnough, 'error');
    }

    renderApp();
    renderShop();
    renderMyHeroes();
    renderUserDetailModal();
    showNotification(heroText.heroUpgraded, 'success', { title: result.hero?.name || heroText.upgrade });
}

function sellHero(heroInstanceId, userId = '__current__') {
    const heroText = getHeroTextSet();
    const result = window.gameDB.sellHeroForUser(userId, heroInstanceId, { source: 'sell' });
    if (!result.success) {
        return showNotification(getTranslations().formValidationError, 'error');
    }

    closeHeroDetailModal();
    renderApp();
    renderShop();
    renderMyHeroes();
    showNotification(heroText.heroSold, 'success', { title: result.hero?.name || heroText.sell });
}

function reissueHero(heroInstanceId, userId = '__current__') {
    const heroText = getHeroTextSet();
    const result = window.gameDB.reissueHeroForUser(userId, heroInstanceId, { source: 'reissue' });
    if (!result.success) {
        return showNotification(getTranslations().notEnough, 'error');
    }

    renderApp();
    renderMyHeroes();
    renderHeroDetailModal();
    showNotification(heroText.heroReissued, 'success', { title: result.hero?.name || heroText.reissue });
}

function openHeroDetailModal(heroInstanceId) {
    APP_STATE.selectedHeroInstanceId = heroInstanceId;
    renderHeroDetailModal();
    const modal = document.getElementById('hero-detail-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
    syncModalState();
}

function renderHeroDetailModal() {
    const body = document.getElementById('hero-detail-body');
    const title = document.getElementById('hero-detail-title');
    const label = document.getElementById('hero-detail-label');
    const upgradeButton = document.getElementById('hero-detail-upgrade');
    const sellButton = document.getElementById('hero-detail-sell');
    const reissueButton = document.getElementById('hero-detail-reissue');
    if (!body || !title || !label || !upgradeButton || !sellButton || !reissueButton) return;

    const heroText = getHeroTextSet();
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const heroes = getPurchasedHeroes();
    const hero = heroes.find((item) => String(item.instanceId) === String(APP_STATE.selectedHeroInstanceId));
    if (!hero) {
        body.innerHTML = '';
        title.textContent = heroText.heroProfile;
        label.textContent = heroText.menuHeroLedger;
        return;
    }

    const displayHero = enrichHeroWithEconomy(hero, heroes);
    title.textContent = displayHero.name;
    label.textContent = `${getHeroRarityLabel(displayHero.rarityKey)} · ${heroText.level} ${displayHero.level}`;
    upgradeButton.textContent = `${heroText.upgrade} · ${formatCurrency(displayHero.nextUpgradeCost, locale)}`;
    sellButton.textContent = `${heroText.sell} · ${formatCurrency(displayHero.sellValue || 0, locale)}`;
    reissueButton.textContent = `${heroText.reissue} · ${formatCurrency(displayHero.reissueCost || 0, locale)}`;

    const synergy = getHeroSynergySummary(heroes);
    body.innerHTML = `
        <div class="hero-profile-visual rarity-${displayHero.rarityKey}">
            <img src="${displayHero.image}" alt="${displayHero.name}">
            <div class="hero-profile-badges">
                <span class="hero-rarity-chip rarity-${displayHero.rarityKey}">${getHeroRarityLabel(displayHero.rarityKey)}</span>
                <span class="hero-level-badge">LVL ${displayHero.level}</span>
            </div>
        </div>
        <div class="hero-profile-info">
            <p class="hero-description">${displayHero.description}</p>
            <div class="hero-stats-grid hero-profile-stats">
                <div class="hero-stat-tile"><span>${heroText.currentIncome}</span><strong>${formatRnx(displayHero.boostedProfitPerHour, locale)}</strong></div>
                <div class="hero-stat-tile"><span>${heroText.cycleIncome}</span><strong>${formatRnx(displayHero.boostedTotalProfit, locale)}</strong></div>
                <div class="hero-stat-tile"><span>${heroText.timer}</span><strong data-hero-countdown="${displayHero.cycleEndsAt}">${displayHero.countdown}</strong></div>
                <div class="hero-stat-tile"><span>${heroText.lifetime}</span><strong>${formatRnx(displayHero.lifetimeEarnings || 0, locale)}</strong></div>
            </div>
            <div class="hero-detail-panel hero-profile-panel">
                <div class="hero-detail-line"><span>${heroText.rarityCombo}</span><strong>+${Math.round(synergy.rarityBonus * 100)}%</strong></div>
                <div class="hero-detail-line"><span>${heroText.classCombo}</span><strong>+${Math.round(synergy.classBonus * 100)}%</strong></div>
                <div class="hero-detail-line"><span>${heroText.synergy}</span><strong>+${Math.round(synergy.totalBonus * 100)}%</strong></div>
                <div class="hero-detail-line"><span>${heroText.nextPayout}</span><strong>${formatRnx(displayHero.boostedTotalProfit, locale)}</strong></div>
            </div>
        </div>
    `;
}

function createOwnedHeroCard(hero, options = {}) {
    const locale = LANGUAGE_TO_LOCALE[getCurrentLanguage()] || 'ru-RU';
    const heroText = getHeroTextSet();
    const allHeroes = options.allHeroes || getPurchasedHeroes();
    const displayHero = enrichHeroWithEconomy(hero, allHeroes);
    const card = document.createElement('article');
    const interactive = options.interactive !== false;
    card.className = `my-hero-item rarity-${displayHero.rarityKey}`;
    card.innerHTML = `
        <div class="my-hero-media">
            <img src="${displayHero.image}" alt="${displayHero.name}">
            <span class="hero-rarity-chip rarity-${displayHero.rarityKey}">${getHeroRarityLabel(displayHero.rarityKey)}</span>
        </div>
        <div class="hero-stats-col">
            <div class="my-hero-topline">
                <div>
                    <strong>${displayHero.name}</strong>
                    <span class="hero-sub">${heroText.role}: ${displayHero.role || '-'} · ${heroText.level}: ${displayHero.level || 1}</span>
                </div>
                <span class="hero-level-badge">LVL ${displayHero.level || 1}</span>
            </div>
            <div class="hero-inline-stats">
                <span>${heroText.currentIncome}: ${formatRnx(displayHero.boostedProfitPerHour, locale)}</span>
                <span>${heroText.totalIncome}: ${formatRnx(displayHero.boostedTotalProfit, locale)}</span>
                <span>${heroText.duration}: ${displayHero.durationHours}h</span>
            </div>
            <div class="hero-inline-stats">
                <span>${heroText.nextUpgrade}: ${formatCurrency(displayHero.nextUpgradeCost, locale)}</span>
                <span>${heroText.growth}: +${Math.round((displayHero.growthRate || 0) * 100)}%</span>
                <span data-hero-countdown="${displayHero.cycleEndsAt}">${displayHero.countdown}</span>
            </div>
            <div class="hero-inline-stats">
                <span>${heroText.lifetime}: ${formatRnx(displayHero.lifetimeEarnings || 0, locale)}</span>
                <span>${heroText.synergy}: +${Math.round(displayHero.synergyBonus * 100)}%</span>
                <span>${heroText.nextPayout}: ${formatRnx(displayHero.boostedTotalProfit, locale)}</span>
            </div>
            ${interactive ? `<div class="hero-actions-row"><button class="hero-secondary-btn hero-view-btn" type="button">${heroText.details}</button><button class="buy-btn hero-upgrade-btn" type="button">${heroText.upgrade}</button></div>` : ''}
        </div>
    `;

    if (interactive) {
        const upgradeButton = card.querySelector('.hero-upgrade-btn');
        if (upgradeButton) {
            upgradeButton.addEventListener('click', () => upgradeHero(displayHero.instanceId));
        }
        const viewButton = card.querySelector('.hero-view-btn');
        if (viewButton) {
            viewButton.addEventListener('click', () => openHeroDetailModal(displayHero.instanceId));
        }
    }

    return card;
}

function renderMyHeroes() {
    const list = document.getElementById('my-heroes-list');
    const countEl = document.getElementById('my-heroes-count');
    const incomeEl = document.getElementById('my-heroes-income');
    if (!list) return;

    const heroText = getHeroTextSet();
    const heroes = getPurchasedHeroes().slice().sort((left, right) => Number(right.totalProfit || 0) - Number(left.totalProfit || 0));
    const synergy = getHeroSynergySummary(heroes);
    list.innerHTML = '';

    if (!heroes.length) {
        const empty = document.createElement('div');
        empty.className = 'request-card';
        empty.textContent = heroText.noHeroes;
        list.appendChild(empty);
    }

    const enrichedHeroes = heroes.map((hero) => enrichHeroWithEconomy(hero, heroes));
    const projectedIncome = enrichedHeroes.reduce((sum, hero) => sum + Number(hero.boostedTotalProfit || 0), 0);
    const nextCycleHero = enrichedHeroes.slice().sort((left, right) => new Date(left.cycleEndsAt).getTime() - new Date(right.cycleEndsAt).getTime())[0];
    heroes.forEach((hero) => list.appendChild(createOwnedHeroCard(hero, { allHeroes: heroes })));

    if (countEl) countEl.textContent = String(heroes.length || 0);
    if (incomeEl) incomeEl.textContent = `$${projectedIncome}`;
    setText('my-heroes-bonus', `${Math.round(synergy.totalBonus * 100)}%`);
    const nextPayoutEl = document.getElementById('my-heroes-next-payout');
    if (nextPayoutEl) {
        nextPayoutEl.dataset.heroCountdown = nextCycleHero?.cycleEndsAt || '';
        nextPayoutEl.textContent = nextCycleHero ? formatCountdown(nextCycleHero.cycleEndsAt) : '--:--:--';
    }
}

window.GameProfile = {
    renderApp,
    showNotification,
    exportData,
    closeAdminModal
};
