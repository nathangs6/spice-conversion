const path = require('path');

module.exports = {
  entry: './src/controllers.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};