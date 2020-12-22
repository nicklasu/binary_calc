function Header({ sign }) {
  return sign === 'unsigned'
    ? <h1>HeaderUnsigned</h1>
    : <h1>HeaderSigned</h1>;
}

export default Header;
