var path = require('path');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ]
    }

};

// we'll extend these later and use merge then
if (TARGET === 'build') {
    module.exports = common;
}

if (TARGET === 'dev') {
    module.exports = common;
}