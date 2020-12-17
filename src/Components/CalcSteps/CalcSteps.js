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

  let total = calculate(getNumber(num1), getNumber(num2), calc).toString(2);

  //Check if the user has chosen subtraction, if they have, perform these steps:
  if (calc === "-") {
    //Make total into a list and compare it to num1 to get the right length
    var sum = addMissingZeros(binaryToArray(total), binaryToArray(num1).length);
    //If user has chosen other option than subtraction then just take total and make it to sum so it can be represented in the html.
  } else {
    sum = total;
  }
  const overflow =
    total.toString(2).length > binary1.length ||
    total.toString(2).length > binary2.length ||
    sum < [0, 0, 0, 0];

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
          <p style={{ textAlign: "right" }}>{sum}</p>
        )
      }
    </section>
  );
}

export default CalcSteps;
