var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var webpack = require('webpack');

var config = {
  entry: './src/assets/js/main.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/_build',
    publicPath: __dirname + '/_build' // @see https://github.com/DustinJackson/html-webpack-inline-source-plugin/issues/12
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node-modules/, loader: 'babel-loader', query: { presets: [['es2015', { 'modules': false }]] }
      } 
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'CSS Editor',
      inlineSource: '.(js)$',
      template: 'ejs-loader!./src/templates/index.ejs',
      filename: 'index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};

module.exports = config;