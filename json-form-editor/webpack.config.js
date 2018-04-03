const webpack = require('webpack');
const configure = require('@dosomething/webpack-config');
const resolve = require('path').resolve;
const webpackValidator = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

// Configure Webpack using `@dosomething/webpack-config`.
module.exports = configure({
  entry: './src/assets/js/main.js',
  output: {
    filename: '[name].js',
    path: resolve('_build'),
    publicPath: '/_build/' // @see https://github.com/DustinJackson/html-webpack-inline-source-plugin/issues/12
  },

  module: {
    loaders: [
      { enforce: 'pre', test: /\.js$/, use: 'eslint-loader', include: resolve('/src/assets') },
      // { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      // { test: /\.scss$/,  loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },

  resolve: {
    modules: [resolve('node_modules')],
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
