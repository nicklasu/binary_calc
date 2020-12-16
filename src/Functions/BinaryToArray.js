/**
 * Divides string to array and reverses it
 * @example 'heippa' => ['a','p','p','i','e','h']
 * @example '000111' => ['1','1','1','0','0','0']
 * @param {String} binary
 * @returns {Array}
 */
function binaryToArray(binary) {
  return binary.split("").reverse();
}

export default binaryToArray;
