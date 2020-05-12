const { src } = require('./utils');

module.exports = {
  '@src': src(''),
  '@assets': src('assets'),
  '@components': src('components'),
  '@shared': src('components/shared'),
  '@views': src('views'),
  '@theme': src('theme'),
  '@app': src('app'),
  '@api': src('api'),
};