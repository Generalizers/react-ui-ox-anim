const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  entry: path.resolve('src', 'module.ts'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/',
    library: {
      name: 'react-ui-ox-anim',
      type: 'umd'
    },
    filename: 'module.js'
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    jquery: 'JQuery',
    jqueryui: 'JQueryUI'
  }
});
