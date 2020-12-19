import "./style.css";
import getNumber from "../../Functions/GetNumber";
import calculate from "../../Functions/Calculate";
import addZeros from "./Functions/addZeros";
import checkOverflow from "./Functions/UnsignedOverflow";
import { waitFor } from "@testing-library/react";

// Display unsigned char calculation
function Unsigned({ num1, num2, calc, sign }) {
  // Set max bit size
  // Add zeros if needed
  // Display result as binary
  if (sign === "unsigned") {
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
  } else if (sign === "signed") {
    return (
      <section className="section-calc">
        <p>Feature</p>
        <p>Not</p>

        <p>Developed</p>
      </section>
    );
  }
}
export default Unsigned;
