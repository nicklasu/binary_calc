function Header({ sign }) {
  return sign === 'unsigned'
    ? <h1>Unsigned</h1>
    : <h1>Signed</h1>;
}

export default Header;
