import calculate from "../../Functions/Calculate";

// Display the result
function Result({ num1, num2, calc }) {
  const total = calculate(num1, num2, calc);
  return <p style={{ textAlign: "center" }}>{total}</p>;
}

export default Result;
