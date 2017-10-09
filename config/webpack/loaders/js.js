module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    // plugins: ['react-hot-loader/babel'],
    presets: [
      'stage-0',
    ],
  },
};
