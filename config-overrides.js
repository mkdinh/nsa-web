const { override, addLessLoader, addWebpackAlias, useBabelRc } = require('customize-cra');
const { addGlobalLess } = require('./utils');
const aliases = require('./aliases');

const lessFiles = ['global.less', 'colors.less', 'layout.less'];

module.exports = override(
  useBabelRc(),
  addLessLoader({
    javascriptEnabled: true,
    modules: true,
    globalVars: { theme: aliases.theme },
  }),
  addWebpackAlias(aliases),
  addGlobalLess(lessFiles),
);