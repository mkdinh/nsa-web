const CopyPlugin = require("copy-webpack-plugin");

module.exports = (opts) => (config) => {
  config.plugins.push(new CopyPlugin(opts));

  return config;
};
