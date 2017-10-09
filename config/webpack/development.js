const path = require('path');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sharedConfig = require('./shared.js');
const conf = require('./configuration.js');

module.exports = merge(sharedConfig, {
  devtool: 'cheap-eval-source-map',
  output: {
    pathinfo: true,
  },
  devServer: {
    contentBase: path.resolve('public'),
    clientLogLevel: 'info',
    https: conf.dev_server.https || false,
    host: conf.dev_server.host || '0.0.0.0',
    port: conf.dev_server.port || '3000',
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    stats: {
      errorDetails: true,
    },
  },
  plugins: [
    new DashboardPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
      ignoreOrder: true,
    }),
  ],
});
