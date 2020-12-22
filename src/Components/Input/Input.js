// For user input
// Take only binary numbers (0 and 1) as valid values
function Input({ setNumber }) {
  return (
    <input
      inputMode="numeric"
      pattern="[0-1]*"
      placeholder={0}
      onChange={(e) => setNumber(e.currentTarget.value)}
      style={{ textAlign: 'center' }}
    />
  );
}

export default Input;
