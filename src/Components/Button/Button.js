function Button({ text, setValue }) {
  return (
    <button
      type="button"
      onClick={() => setValue(text)}
    >
      {text}
    </button>
  );
}

export default Button;
