/**
 * Add zeros to beginning of binary according to bit size
 * @example (0100, 5) => 01000
 * @param {String} binary - binary
 * @param {Number} bitSize - bit size
 * @returns {String}
 */
function addZerosUnsigned(binary, bitSize) {
  // Check if adding zeros is needed
  if (binary.length < bitSize) {
    const zerosNeeded = bitSize - binary.length;
    for (let i = 0; i < zerosNeeded; i++) {
      binary = "0" + binary;
    }
  }
  return binary;
}

export default addZerosUnsigned;
