import binaryToArray from './Signed/BinaryToArray';

function addStar(num1, num2, bitSize) {
  const starArr = [];
  // Change binary strings to numbers
  const bin1 = binaryToArray(num1).map(Number).reverse();
  const bin2 = binaryToArray(num2).map(Number).reverse();
  let carry;

  for (let i = 0; i < bitSize; i += 1) {
    // Add star if 1 was carried
    // Empty char if not
    starArr[i] = carry
      ? '*'
      : '\u00A0';

    // Check if 1 gets carried
    // Evaluates to True or False
    // True = 1
    // False = 0
    carry = bin1[i] + bin2[i] + carry > 1;
  }

  return starArr.reverse().join('').toString();
}

export default addStar;
