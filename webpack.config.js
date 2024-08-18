const path = require('path');
const WarningsToErrorsPlugin = require('warnings-to-errors-webpack-plugin');

module.exports = {
  entry: './src/controllers.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  plugins: [
    new WarningsToErrorsPlugin()
  ],
  stats: {
    logging: 'info',
    warnings: true
  },
};