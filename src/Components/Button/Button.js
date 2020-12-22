function Button({ text, setValue }) {
  return <button onClick={() => setValue(text)}>{text}</button>;
}

export default Button;
