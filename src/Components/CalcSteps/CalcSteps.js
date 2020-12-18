import "./style.css";
import addMissingZeros from "../../Functions/addMissingZeros";
import binaryToArray from "../../Functions/BinaryToArray";
import getNumber from "../../Functions/GetNumber";
import calculate from "../../Functions/Calculate";

// Tätä pitää muuttaa vielä jotenkin selvemmäksi
function CalcSteps({ num1, num2, calc }) {
  // Total +/- as integer and binary
  let totalInt = calculate(getNumber(num1), getNumber(num2), calc);
  let totalBin = totalInt.toString(2);

  // If result is negative
  // Remove "-" from totalBin
  if (totalInt < 0) totalBin = totalBin.substring(1);

  // Set binaries as arrays
  // Add zeros if needed
  let binary1 = addMissingZeros(
    binaryToArray(num1),
    binaryToArray(num2).length
  );
  let binary2 = addMissingZeros(
    binaryToArray(num2),
    binaryToArray(num1).length
  );

  // Total binary as array
  // Add zeros if needed
  totalBin = binaryToArray(totalBin);
  totalBin = addMissingZeros(
    totalBin,
    Math.max(binary1.length, binary2.length)
  );

  // Check if result is overflowing
  let overflow =
    totalBin.length > binary1.length ||
    totalBin.length > binary2.length ||
    totalInt < 0;

  return (
    <section className="section-calc">
      <p>{binary1}</p>
      <p>{binary2}</p>
      <hr />
      {
        // Display overflow message if it overflows(!?)
        overflow ? <p>overflow!</p> : <p>{totalBin}</p>
      }
    </section>
  );
}

export default CalcSteps;
