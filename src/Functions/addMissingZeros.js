/**
 * Add zeros to beginning of binary array to make them match
 * @example (0100, 5) => ['0','0','1','0','0']
 * @example (0100, 4) => ['0','1','0','0']
 * @param {Array} array - binary as array
 * @param {Number} neededLength - length of other input field
 * @returns {Array}
 */
function addMissingZeros(array, neededLength) {
  // Check if adding zeros is needed
  if (array.length < neededLength) {
    let zerosNeeded = neededLength - array.length;
    for (let i = 0; i < zerosNeeded; i++) {
      array.unshift("0");
    }
  }
  return array;
}

export default addMissingZeros;
