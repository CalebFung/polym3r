/**
 * Webpack config file
 * TODO: create dev and prod files
 */

'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, 'node_modules'),
      component: path.resolve(__dirname, 'src/components')
    }
  },
  module: {
    rules: [
       {
           test: /\.js$/,
           use: {
              loader: 'babel-loader'
           }
       },
       {
        test: /\.css$/, // TODO: fix loader
        use: ['text-loader']
     },
       {
        test: /\.html$/,
        use: ['text-loader']
     }
    ]
 },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'),
        to: '.',
        flatten: true
      }
    ])
  ]
};