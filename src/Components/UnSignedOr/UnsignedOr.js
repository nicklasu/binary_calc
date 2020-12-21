import Signed from "../../Components/Signed/Signed.js";
import Unsigned from "../../Components/Unsigned/Unsigned.js";
function UnsignedOr({ num1, num2, setNum1, setNum2, calc, sign }) {
  if (sign === "unsigned") {
    return (
      <Unsigned
        setNum1={setNum1}
        setNum2={setNum2}
        num1={num1}
        num2={num2}
        calc={calc}
        sign={sign}
      />
    );
  } else if (sign === "signed") {
    return (
      <Signed
        setNum1={setNum1}
        setNum2={setNum2}
        num1={num1}
        num2={num2}
        calc={calc}
        sign={sign}
      />
    );
  }
}

export default UnsignedOr;
