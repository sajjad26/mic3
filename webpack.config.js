const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './Client/index.html',
  filename: 'app.html',
  inject: 'body'
});
module.exports = {
  devtool: 'eval-source-map',
  entry: ['./Client/index.js'],
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    compress: false,
    overlay: true,
    port: 8000,
    historyApiFallback: {
      index: '/app.html'
    },
    hot: true,
    before(app){
      
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.(png|woff|woff2|eot|ttf|gif|jpg)$/, loader: ['url-loader?limit=100000'] },
      { 
        test: /\.svg$/, 
        loader: ['svg-inline-loader'] 
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: './node_modules/bootstrap/dist', to: './bootstrap' },
      { from: './Client/Assets', to: './assets' }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};