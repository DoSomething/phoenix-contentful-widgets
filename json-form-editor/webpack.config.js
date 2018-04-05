const webpack = require('webpack');
const resolve = require('path').resolve;
const webpackValidator = require('webpack-validator');
const configure = require('@dosomething/webpack-config');

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
