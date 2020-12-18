// Check if result is bigger than bit size
// Or smaller than 0
function unsignedOverflow(binary, bitSize) {
  let overflow = binary.length > bitSize || parseInt(binary, 2) < 0;
  return overflow ? "overflow!" : binary;
}

export default unsignedOverflow;
