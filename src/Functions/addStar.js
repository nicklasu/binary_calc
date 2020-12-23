import binaryToArray from './Signed/BinaryToArray';

function addStar(num1, num2, bitSize) {
  const starArr = new Array(bitSize).reverse();
  const bin1 = binaryToArray(num1).reverse();
  const bin2 = binaryToArray(num2).reverse();

  function carryToNext(numb1, numb2, numb3) {
    return (Number(numb1) + Number(numb2) + numb3) > 1;
  }
  let carry = 0;
  for (let i = 0; (bitSize - 1) > i; i += 1) {
    if (carryToNext(bin1[i], bin2[i], carry)) {
      starArr[i] = '*';
      carry += 1;
    } else {
      starArr[i] = ' ';
      carry += 0;
    }
  }

  return starArr.join('');
}

export default addStar;