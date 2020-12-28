import './style.css';
import { useEffect } from 'react';
import getNumber from '../../Functions/GetNumber';
import calculate from '../../Functions/Calculate';
import addZeros from './Functions/addZeros';
import checkOverflow from './Functions/UnsignedOverflow';
import carried from '../../Functions/carriedNumbers';
import borrowed from '../../Functions/borrowedNumbers';

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

  // Display carried/borrowed as stars
  const stars = calc === '+'
    ? carried(num1, num2)
    : borrowed(num1, num2);

  // Show helper text if numbers are borrowed or carried
  // If numbers arent borrowed or carried, show nothing
  const showCarried = () => (stars.includes('*') ? '*carried' : null);
  const showBorrowed = () => (stars.includes('*') ? '*borrowed' : null);

  return (
    <>
      <section className="section-calc">
        <p className="unsigned-carried-numbers">{stars}</p>
        <p className="unsigned-num1">{num1}</p>
        <p className="unsigned-num2">
          <span className="unsigned-calc">{calc}</span>
          {num2}
        </p>
        <hr />
        <p className="unsigned-result">{result}</p>
      </section>
      <p className="unsigned-stars">
        {calc === '+'
          ? showCarried()
          : showBorrowed()}
      </p>
    </>
  );
}
export default Unsigned;
