import addZeros from "./addZeros";
// Check if result is bigger than bit size
// Or smaller than 0
// Add zeros according to bit size
function unsignedOverflow(binary, bitSize) {
  const overflow = binary.length > bitSize || parseInt(binary, 2) < 0;
  return overflow ? "overflow!" : addZeros(binary, bitSize);
}

export default unsignedOverflow;
