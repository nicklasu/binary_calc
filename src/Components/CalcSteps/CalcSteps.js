import "./style.css";
import addMissingZeros from "../../Functions/addMissingZeros";
import binaryToArray from "../../Functions/BinaryToArray";
import getNumber from "../../Functions/GetNumber";
import calculate from "../../Functions/Calculate";

// Tätä pitää muuttaa vielä jotenkin selvemmäksi
function CalcSteps({ num1, num2, calc }) {
  let binary1 = addMissingZeros(
    binaryToArray(num1),
    binaryToArray(num2).length
  );
  let binary2 = addMissingZeros(
    binaryToArray(num2),
    binaryToArray(num1).length
  );
  // Total +/- in binary
  let total = calculate(getNumber(num1), getNumber(num2), calc);
  const overflow =
    total.toString(2).length > binary1.length ||
    total.toString(2).length > binary2.length;

  return (
    <section className="section-calc">
      <p>{binary1}</p>
      <p>{binary2}</p>
      <hr />
      {
        // Display overflow message if it overflows(!?)
        overflow ? (
          <p>overflow!</p>
        ) : (
          <p style={{ textAlign: "right" }}>{total.toString(2)}</p>
        )
      }
    </section>
  );
}

export default CalcSteps;
