import calculate from '../../Functions/Calculate';
import './style.css';

// Display the result
function Result({ num1, num2, calc }) {
  const total = calculate(num1, num2, calc);
  return (
    <p className="result-calc">
      <span className="result-num1">{`${num1} `}</span>
      <span>{`${calc} `}</span>
      <span className="result-num2">{`${num2} `}</span>
      <span>= </span>
      <span className="result-total">{`${total}`}</span>
    </p>
  );
}

export default Result;
