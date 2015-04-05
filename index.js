/**
 * Converts Number to Text.
 *
 * @param  {Number} num
 * @return {String}
 */

var numberToText = require('./lib/numberToText');

module.exports = function (num) {
  return numberToText(num,'indian');
};