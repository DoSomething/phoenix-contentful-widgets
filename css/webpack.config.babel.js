const resolve = require('path').resolve;
const webpack = require('webpack');
const webpackValidator = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = () => {
  return webpackValidator({
    entry: './src/assets/js/main.js',
    output: {
        filename: '[name].js',
        path: resolve('_build'),
        publicPath: '/_build/' // @see https://github.com/DustinJackson/html-webpack-inline-source-plugin/issues/12
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], exclude: /node-modules/ },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss$/,  loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CSS Editor',
            inlineSource: '.(js)$',
            template: 'ejs-loader!./src/index.ejs',
            filename: 'index.html'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
  });
}
