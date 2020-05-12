const path = require('path');
var appRoot = require('app-root-path');

module.exports = function src(subDirectory) {
  return path.resolve(appRoot.path, 'src', subDirectory);
};