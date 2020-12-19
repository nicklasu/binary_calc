function UnsignedOr({ sign }) {
  if (sign === "signed") {
    return (
      <section>
        <h1>signed</h1>
      </section>
    );
  } else if (sign === "unsigned") {
    return (
      <section>
        <h1>unsigned</h1>
      </section>
    );
  }
}

export default UnsignedOr;
