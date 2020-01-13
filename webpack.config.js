const path = require('path');

module.exports = {
  entry: './profileGenerator/app.js',
  output: {
    filename: 'profileGenerator.js',
    path: path.resolve(__dirname, 'dist'),
  },
};