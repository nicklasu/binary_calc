import Signed from '../Signed/Signed';
import Unsigned from '../Unsigned/Unsigned';

// Calculate Unsigned or Signed value based on user choice
function UnsignedOr({
  num1, num2, setNum1, setNum2, calc, sign,
}) {
  return (
    <>
      {sign === 'unsigned'
        ? (
          <Unsigned
            setNum1={setNum1}
            setNum2={setNum2}
            num1={num1}
            num2={num2}
            calc={calc}
            sign={sign}
          />
        )
        : (
          <Signed
            setNum1={setNum1}
            setNum2={setNum2}
            num1={num1}
            num2={num2}
            calc={calc}
            sign={sign}
          />
        )}
    </>
  );
}

export default UnsignedOr;
