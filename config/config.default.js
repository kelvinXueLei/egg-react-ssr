const path = require('path');

module.exports = {
    keys: 'secret',
    webpack: {
        custom: {
            configPath: path.join(__dirname, './webpack.config.js'),
        },
    }
};
