const { join, extname } = require('path');
const { sync } = require('glob');

module.exports = {
  path: {
    entry_file: 'index.jsx',
    source_path: 'app/src',
    public_path: 'public',
  },
  dev_server: {
    port: 3000,
    host: '0.0.0.0',
  },
  extensions: (() => {
    const extensions = [];
    sync(join('.', 'config', 'webpack', 'loaders', '*.js')).forEach((loader) => {
      const filename = loader.split('/').pop();
      const filenameWithoutExstension = filename.replace(extname(filename), '');
      filenameWithoutExstension.split('_').forEach((part) => {
        extensions.push(`.${part}`);
      });
    });
    return extensions;
  })(),
};
