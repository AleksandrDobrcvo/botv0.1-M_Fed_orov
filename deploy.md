# Telegram WebApp Deployment Guide

## Preparation for Telegram Deployment

### 1. Server Requirements
- Web server with HTTPS (required for Telegram WebApp)
- Support for modern JavaScript (ES6+)
- Static file hosting

### 2. File Structure
```
your-domain.com/
|-- index.html          # Main application file
|-- styles.css          # Modern glassmorphism styles
|-- script.js           # Application logic
|-- database.js         # Database simulation
|-- manifest.json       # PWA manifest
|-- deploy.md          # This file
```

### 3. Configuration Steps

#### Update Admin IDs
Edit `database.js` and add your Telegram user ID, or use `db_config.js` described below:
```javascript
this.adminIds = ['YOUR_TELEGRAM_USER_ID', 'ANOTHER_ADMIN_ID'];
```

Alternatively create `db_config.js` (included by default) and set `window.DB_CONFIG.adminIds` there — this avoids editing `database.js` directly.

Example `db_config.js`:
```javascript
window.DB_CONFIG = { adminIds: ['YOUR_TELEGRAM_USER_ID'] };
```

#### Configure Telegram Bot
1. Create a bot via @BotFather
2. Get your bot token
3. Set up WebApp URL in bot settings

#### Update WebApp URL
Replace `your-domain.com` with your actual domain:
- BotFather command: `/mybots` -> `Bot Settings` -> `Menu Button` -> `WebApp URL`
- Set URL to: `https://your-domain.com/`

### 4. HTTPS Setup
- Use Let's Encrypt for free SSL certificate
- Ensure all resources load over HTTPS
- Test with: `https://your-domain.com/`

### 5. Testing
1. Open in browser: `https://your-domain.com/`
2. Test language switching
3. Test admin panel (double-click balance/rating to reset)
4. Test in Telegram bot

### 6. Telegram Integration Features
- Automatic user detection
- Haptic feedback
- Theme adaptation
- Confirmation dialogs
- Main button integration

### 7. Admin Features
- Admin panel only for specified IDs
- Data export/import
- User data reset
- Database statistics

### 8. Language Support
- Russian (RU) - Default
- Ukrainian (UA)
- English (EN)
- Persistent language selection

### 9. Modern Features
- Animated gradient background
- Floating particles
- Glassmorphism design
- Smooth animations
- Responsive design
- Touch interactions

### 10. Database
- LocalStorage simulation
- Auto-save functionality
- Data backup/export
- Reset capabilities

## Deployment Checklist

- [ ] HTTPS certificate installed
- [ ] All files uploaded to server
- [ ] Admin IDs configured in database.js
- [ ] Telegram bot created and configured
- [ ] WebApp URL set in bot settings
- [ ] Application loads correctly in browser
- [ ] All interactions work in Telegram
- [ ] Language switching functional
- [ ] Admin panel accessible to admins only
- [ ] Data persistence working

## Security Notes

- Admin IDs are hardcoded for security
- No external API calls required
- All data stored locally
- HTTPS required for Telegram integration
- No sensitive data in client-side code

## Performance Optimization

- CSS animations use GPU acceleration
- Lazy loading for particles
- Optimized JavaScript execution
- Minimal external dependencies
- Efficient DOM manipulation

## Browser Compatibility

- Modern browsers (Chrome, Safari, Firefox, Edge)
- Telegram in-app browser
- Mobile-optimized
- Touch-friendly interface

## Support

For issues with deployment:
1. Check browser console for errors
2. Verify HTTPS is working
3. Confirm all files are uploaded
4. Test admin ID configuration
5. Verify Telegram bot settings

---

*Ready for production deployment on Telegram WebApp platform*
