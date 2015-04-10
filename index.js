/**
 * Converts Number to Text.
 *
 * @param  {Number} num
 * @param  {String} type
 * @param  {Boolean} isCurrency
 * @return {String}
 */

var numberToText = require('./lib/numberToText');

module.exports = function (num,type,isCurrency) {
  return numberToText(num,type,isCurrency);
};