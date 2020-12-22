function calculateTotal(first, second, char) {
  if (char === '+') return Number(first) + Number(second);
  if (char === '-') return Number(first) - Number(second);
  return undefined;
}
export default calculateTotal;
