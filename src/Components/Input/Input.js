import getNumber from "../../Functions/GetNumber";
import calculateTotal from "../../Functions/Calculate";
function Input(value) {
  console.log(calculateTotal(5, 4, "+"));
  return (
    <input onChange={(e) => console.log(getNumber(e.target.value))}></input>
  );
}

export default Input;
