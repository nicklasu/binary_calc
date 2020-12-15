/**
 * Convert binary string to number and return it
 * If string is not valid binary return 0
 * @example 0011 => 3
 * @example 0022 => 0
 * @param {String} binary
 * @returns {Number}
 */
function getNumber(binary) {
  const number = parseInt(binary, 2);
  return number ? number : 0;
}
export default getNumber;
