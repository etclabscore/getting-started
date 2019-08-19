const path = require('path');

module.exports = {
  entry: './build/lab5/index.js',
  target: "node",
  mode:"development",
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../build/dist'),
    filename: 'index.js'
  },
};
