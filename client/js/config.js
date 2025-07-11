var config = {
    development: {
        API_BASE_URL: 'http://localhost:3001/api',
        DEBUG: true,
        LOG_LEVEL: 'debug'
    },
    production: {
        API_BASE_URL: "https://tasks.api.guardianenviro.co.in/api", // <-- your backend API URL
        DEBUG: false,
        LOG_LEVEL: 'error'
    }
};

// Auto-detect environment
var environment = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'development' : 'production';
window.APP_CONFIG = config[environment];
console.log('APP_CONFIG:', window.APP_CONFIG);