var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('../webpack.conf');

    config.context = __dirname + '';
    config.entry = {
        app: "../../src/app.js"
    };
    config.output = {
        filename: 'js/app.bundle.js'
    };
    config.plugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../../src/index.html'
        })
    ];

module.exports = config;