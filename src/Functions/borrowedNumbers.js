import binaryToArray from './Signed/BinaryToArray';
/**
 * @param {String} num1 - binary number as string
 * @param {String} num2 - binary number as string
 * @returns {String} - Displays borrowed numbers as stars
 * @example ('1000', '0001') => '*** '
 */

// Add star if number was borrowed
// Add empty space if not
function carriedNumbersSubtract(num1, num2) {
  const bin1 = binaryToArray(num1).map(Number);
  const bin2 = binaryToArray(num2).map(Number);
  const carriedNumbersArray = [];
  const bitSize = Math.max(num1.length, num2.length) - 1;
  let carry = false;

  for (let i = bitSize; i >= 0; i -= 1) {
    carriedNumbersArray[i] = carry
      ? '*'
      : '\u00A0';
    carry = bin1[i] - bin2[i] - carry < 0;
  }
  return carriedNumbersArray.join('').toString();
}

export default carriedNumbersSubtract;
