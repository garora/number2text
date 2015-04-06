/**
 * Converts Number to Text.
 *
 * @param  {Number} num
 * @param  {String} type
 * @return {String}
 */

var numberToText = require('./lib/numberToText');

module.exports = function (num,type) {
  return numberToText(num,type);
};