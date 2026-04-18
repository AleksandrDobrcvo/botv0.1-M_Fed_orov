// Optional DB configuration file.
// Use this file to set admin Telegram IDs and override default user/settings values.
// Replace the sample admin ID with your Telegram user ID (as string).

window.DB_CONFIG = {
  adminIds: ['6029312631'], // <-- замените на ваш Telegram ID
  botUsername: 'YourBotUsername', // <-- замените на username вашего бота (без @)
  // Firebase Realtime Database configuration
  firebase: {
    apiKey: "AIzaSyAqsy3xVkqvIwJ-Kn8zHP2hIeQrd7dYTC4",
    authDomain: "mfedorov-521cc.firebaseapp.com",
    databaseURL: "https://mfedorov-521cc-default-rtdb.firebaseio.com",
    projectId: "mfedorov-521cc",
    storageBucket: "mfedorov-521cc.firebasestorage.app",
    messagingSenderId: "434788819797",
    appId: "1:434788819797:web:56e80eec4c91c6a72dc5dc"
  },
  // defaultData can override any defaults from database.js, e.g. language or initial user values
  defaultData: {
    settings: {
      language: 'ru'
    },
    // user: { /* optional to override default user values */ }
  }
};
