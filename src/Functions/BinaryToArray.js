/**
 * Divides string to array
 * @example 'heippa' => ['h','e','i','p','p','a']
 * @example '000111' => ['0','0','0','1','1','1']
 * @param {String} binary
 * @returns {Array}
 */
function binaryToArray(binary) {
  return binary.split("");
}

export default binaryToArray;
