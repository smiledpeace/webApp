const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const loaders = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
            presets: ['es2015','stage-0']
        }
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?minimize!less-loader?modules'}),
    },
    {
        test: /\.less/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?minimize!less-loader?modules'}),
    },
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                less: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: 'css-loader?minimize!less-loader'
                }),
            },
        }
    },

];

module.exports = {
    entry: __dirname + '/public/main.js',
    output: {
        path: __dirname + '/public/dist',
        filename: 'build.js'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: loaders
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin("style.css"),
        new webpack.LoaderOptionsPlugin({
            debug: false,
            options: {
                postcss: [
                    autoprefixer()
                ],
            },
        })
    ],
    watch: true
};
