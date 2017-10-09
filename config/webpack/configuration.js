const { resolve, join, extname } = require('path');
const { sync } = require('glob');

module.exports = {
  path: {
    entry_file: 'index.js',
    source_path: 'app/src',
    public_path: 'public',
  },
  dev_server: {
    port: 3000,
    host: '0.0.0.0',
  },
  extensions: (() => {
    const extensions = [];
    sync(join('.', 'config', 'webpack', 'loaders', '*.js')).map((loader, b) => {
      const filename = loader.split('/').pop();
      const filename_without_estension = filename.replace(extname(filename), '');
      filename_without_estension.split('_').forEach((part) => {
        extensions.push(`.${part}`);
      });
    });
    return extensions;
  })(),
};
