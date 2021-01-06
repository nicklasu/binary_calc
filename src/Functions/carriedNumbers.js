import binaryToArray from './Signed/BinaryToArray';
/**
 * @param {String} num1 - binary number as string
 * @param {String} num2 - binary number as string
 * @returns {String} - Displays carried numbers as stars
 * @example ('0101', '0101') => '* * '
 */

// Add star if number was carried
// Add empty space if not
function carriedNumbers(num1, num2) {
  const bin1 = binaryToArray(num1).map(Number);
  const bin2 = binaryToArray(num2).map(Number);
  const carriedNumbersArray = [];
  const bitSize = Math.max(num1.length, num2.length) - 1;
  let carry = false;

  for (let i = bitSize; i >= 0; i -= 1) {
    carriedNumbersArray[i] = carry
      ? '*'
      : '\u00A0';
    carry = bin1[i] + bin2[i] + carry > 1;
  }
  return carriedNumbersArray.join('').toString();
}

export default carriedNumbers;
