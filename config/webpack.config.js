const path = require('path');


module.exports = (app, defaultConfig /* , dev */ ) => {
    const babelLoader = defaultConfig.module.rules[0];

    babelLoader.use.options.babelrc = true;



    return {
        ...defaultConfig,
        "output": {
            "path": path.join(app.baseDir, 'app/public/build'),
            "publicPath": "/build/",
        },
        "devServer": {
            "publicPath": "/build/"
        }
    };
};