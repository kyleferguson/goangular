var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': path.resolve(__dirname, '../app/polyfills.ts'),
    'vendor': path.resolve(__dirname, '../app/vendor.ts'),
    'app': path.resolve(__dirname, '../app/main.ts')
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'sass')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new AssetsPlugin({
      path: path.resolve(__dirname, '../'),
      filename: 'assets.json'
    })
  ]
};
