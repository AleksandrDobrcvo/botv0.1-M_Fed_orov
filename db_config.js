// Optional DB configuration file.
// Use this file to set admin Telegram IDs and override default user/settings values.
// Replace the sample admin ID with your Telegram user ID (as string).

window.DB_CONFIG = {
  adminIds: ['6029312631'], // <-- замените на ваш Telegram ID
  // defaultData can override any defaults from database.js, e.g. language or initial user values
  defaultData: {
    settings: {
      language: 'ru'
    },
    // user: { /* optional to override default user values */ }
  }
};
