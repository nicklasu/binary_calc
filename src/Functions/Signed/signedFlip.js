function signedFlip(num1) {
  const arr1 = num1.split('');
  if (arr1[0] === '1') {
    for (let i = 0; i < arr1.length; i += 1) {
      arr1[i] = arr1[i] === '1'
        ? '0'
        : '1';
    }
  } else {
    return parseInt(arr1.join('').toString(), 2);
  }
  const flipped = parseInt(arr1.join('').toString(), 2);
  return flipped * -1 - 1;
}
export default signedFlip;
