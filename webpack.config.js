var path = require('path');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); //need this

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    resolve : {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },

            {
                test: /\.jsx$/,
                loader: 'babel?stage=1',
                include : path.resolve(ROOT_PATH, 'app')
            }
        ]
    }
};

// we'll extend these later and use merge then
if (TARGET === 'build') {
    module.exports = merge(common, {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

if (TARGET === 'dev') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel?stage=1'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        }
    });
}