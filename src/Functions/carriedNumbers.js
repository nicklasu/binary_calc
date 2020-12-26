import binaryToArray from './Signed/BinaryToArray';
/**
 * @param {String} num1 - binary
 * @param {String} num2 - binary
 * @returns {String} - Displays carried numbers as stars
 * @example ('0101', '0101') => '* * '
 */

function carriedNumbers(num1, num2) {
  // Make arrays (bin1, bin2) from binary numbers (num1, num2)
  // Set strings as numbers in arrays (bin1, bin2)
  // Set empty array for carried numbers (carriedNumbersArray)
  const bin1 = binaryToArray(num1).map(Number);
  const bin2 = binaryToArray(num2).map(Number);
  const carriedNumbersArray = [];
  const bitSize = Math.max(num1.length, num2.length) - 1;

  // Check if 1 gets carried to next
  // true === 1 (carried)
  // false === 0 (not carried)
  let carried = false;

  for (let i = bitSize; i >= 0; i -= 1) {
    // Add star if 1 was carried
    // Empty space if not
    carriedNumbersArray[i] = carried
      ? '*'
      : '\u00A0';

    // Evaluates to True or False
    carried = bin1[i] + bin2[i] + carried > 1;
  }
  return carriedNumbersArray.join('').toString();
}

export default carriedNumbers;
