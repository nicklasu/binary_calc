import './style.css';
// For user input
// Take only binary numbers (0 and 1) as valid values
function Input({ setNumber, name }) {
  return (
    <input
      className={name === 'num1'
        ? 'input-num1'
        : 'input-num2'}
      inputMode="numeric"
      pattern="[0-1]*"
      placeholder={0}
      onChange={(e) => setNumber(e.currentTarget.value)}
      style={{ textAlign: 'center' }}
    />
  );
}

export default Input;
