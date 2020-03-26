// You can add other webpack configuration (plugins, loaders, etc).
// Apart from ES6 Import/Export, Gulp was able to do all my other work so this file is mainly empty.

const entry = require('./entry');

module.exports = {
  entry,
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
  },
};