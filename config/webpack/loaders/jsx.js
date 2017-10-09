module.exports = {
  test: /\.jsx$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    // plugins: ['react-hot-loader/babel'],
    presets: [
      'react',
      'stage-0',
    ],
  },
};
