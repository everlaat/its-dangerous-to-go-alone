const { resolve, join, extname } = require('path');
const { sync } = require('glob');
const conf = require('./configuration.js');

module.exports = {
  entry: resolve(join(conf.path.source_path, conf.path.entry_file)),

  output: {
    path: resolve(conf.path.public_path),
    filename: 'bundle.js',
  },

  module: {
    rules: sync(join('.', 'config', 'webpack', 'loaders', '*.js')).map((loader, b) => {
      const filename = loader.split('/').pop();
      return require(['.', 'loaders', filename].join('/'));
    }),
  },

  resolve: {
    extensions: conf.extensions,
    modules: [
      resolve('app/src/'),
      'node_modules',
    ],
  },

  resolveLoader: {
    modules: ['node_modules'],
  },

};
