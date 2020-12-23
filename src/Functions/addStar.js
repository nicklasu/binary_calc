import binaryToArray from './Signed/BinaryToArray';

function addStar(num1, num2, bitSize) {
  const starArr = new Array(bitSize).reverse();
  const bin1 = binaryToArray(num1).reverse();
  const bin2 = binaryToArray(num2).reverse();
  for (let i = 0; (bitSize - 1) > i; i += 1) {
    if (bin1[i] === '1' && bin2[i] === '1') {
      starArr[i] = '*';
    }
  }
  console.log(bin1);
  console.log(starArr);
  return (
    <p>Asd</p>
  );
}

export default addStar;
