function Header({ sign }) {
  if (sign === "unsigned") {
    return <h1>HeaderUnsigned</h1>;
  } else if (sign === "signed") {
    return <h1>HeaderSigned</h1>;
  }
}

export default Header;
