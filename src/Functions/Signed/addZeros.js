/**
 * Add zeros to beginning of binary array according to bit size
 * @example (0100, 5) => ['0','0','1','0','0']
 * @example (0100, 4) => ['0','1','0','0']
 * @param {Array} array - binary as array
 * @param {Number} bitSize - bit size
 * @returns {Array}
 */
function addZerosSigned(array, bitSize) {
  // Check if adding zeros is needed
  if (array.length < bitSize) {
    let zerosNeeded = bitSize - array.length;
    for (let i = 0; i < zerosNeeded; i++) {
      array.unshift("0");
    }
  }
  return array;
}

export default addZerosSigned;
