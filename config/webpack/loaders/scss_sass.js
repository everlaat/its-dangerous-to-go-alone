const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  test: /\.(scss|sass)$/i,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]&minimize',
      'postcss-loader',
      'sass-loader',
    ],
  }),
};
