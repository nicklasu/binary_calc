import { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Result from '../Result/Result';

import UnsignedOr from '../UnSignedOr/UnsignedOr';
import signedFlip from '../../Functions/Signed/signedFlip';

function SignedComponent() {
  const [num1, setNum1] = useState('0');
  const [num2, setNum2] = useState('0');
  const [calc, setCalc] = useState('+');
  return (
    <section>

      <Input setNumber={setNum1} name="num1" />
      <Input setNumber={setNum2} name="num2" />
      <br />
      <Button text="+" setValue={setCalc} />
      <Button text="-" setValue={setCalc} />
      <br />

      <Result
        num1={
          signedFlip(num1)
          }
        num2={
        signedFlip(num2)
          }
        calc={calc}
      />
      {
        // Show Unsigned or signed after user has submitted in both fields
        num1 && num2
          ? (
            <UnsignedOr
              setNum1={setNum1}
              setNum2={setNum2}
              num1={num1}
              num2={num2}
              calc={calc}
              sign="signed"
            />
          )
          : null
      }
    </section>
  );
}

export default SignedComponent;
