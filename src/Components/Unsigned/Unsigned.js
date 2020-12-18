import "./style.css";
import getNumber from "../../Functions/GetNumber";
import calculate from "../../Functions/Calculate";
import addZeros from "./Functions/addZeros";
import checkOverflow from "./Functions/UnsignedOverflow";

// Display unsigned char calculation
function Unsigned({ num1, num2, calc }) {
  // Set max bit size
  // Add zeros if needed
  // Display result as binary
  const bitSize = Math.max(num1.length, num2.length);
  num1 = addZeros(num1, bitSize);
  num2 = addZeros(num2, bitSize);
  let resultAsBinary = calculate(
    getNumber(num1),
    getNumber(num2),
    calc
  ).toString(2);

  // Display the result
  const result = checkOverflow(resultAsBinary, bitSize);

  return (
    <section className="section-calc">
      <p>{num1}</p>
      <p>{num2}</p>
      <hr />
      <p>{result}</p>
    </section>
  );
}

export default Unsigned;
