import './style.css';
import { useEffect } from 'react';
import getNumber from '../../Functions/GetNumber';
import calculate from '../../Functions/Calculate';
import addZeros from './Functions/addZeros';
import checkOverflow from './Functions/UnsignedOverflow';
import carriedNumbers from '../../Functions/carriedNumbers';

// Display unsigned char calculation
function Unsigned({
  num1, num2, setNum1, setNum2, calc,
}) {
  // Set max bit size from user input
  const bitSize = Math.max(num1.length, num2.length);

  // When component updates, adds needed zeros according to bitSize
  useEffect(() => {
    setNum1(addZeros(num1, bitSize));
    setNum2(addZeros(num2, bitSize));
  });

  // Display result as binary
  const resultAsBinary = calculate(
    getNumber(num1),
    getNumber(num2),
    calc,
  ).toString(2);

  // Display the result
  const result = checkOverflow(resultAsBinary, bitSize);

  // Display carried numbers as stars
  const carried = calc === '+'
    ? carriedNumbers(num1, num2)
    : carriedNumbers('0', '0'); // <-- Placeholder

  return (
    <section className="section-calc">
      <p className="unsigned-carried-numbers">{carried}</p>
      <p>{num1}</p>
      <p>
        <span className="unsigned-calc">{calc}</span>
        {num2}
      </p>
      <hr />
      <p>{result}</p>
    </section>
  );
}
export default Unsigned;
