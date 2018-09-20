const path = require('path');

module.exports = appInfo => ({
    // Serve static resources in webpack build directory
    static: {
        prefix: '/',
        dir: path.join(appInfo.baseDir, 'app/public'),
        dynamic: false,
        preload: true
    },
    keys: 'secrets',
    react: {},
    httpProxy: {
        '/api': {
            target: 'http://localhost:4000/api',
            pathRewrite: { '^/api': '' }
        }
    },
});