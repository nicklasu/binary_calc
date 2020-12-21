import UnSigned from "../../Components/Unsigned/Unsigned.js";
import Signed from "../Signed/Signed.js";
function UnsignedOr({ num1, num2, setNum1, setNum2, calc, sign }) {
  if (sign === "unsigned") {
    return UnSigned({ num1, num2, setNum1, setNum2, calc });
  } else if (sign === "signed") {
    return Signed({ num1, num2, setNum1, setNum2, calc });
  }
}

export default UnsignedOr;
