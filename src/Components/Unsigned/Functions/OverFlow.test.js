import checkOverflow from "./UnsignedOverflow";

// Kopioi tästä vaan ja lisäile omia juttuja
// Ei oo paha

// Käynnistä testit npm run test
describe("Result", () => {
  test("Show overflow if it exceeds bit size", () => {
    expect(checkOverflow("11111", 4)).toBe("overflow!");
  });
});

describe("Binary", () => {
  test("Show binary if not overflowing", () => {
    expect(checkOverflow("1111", 4)).toBe("1111");
  });
});

describe("Binary with added zeros", () => {
  test("Show binary if not overflowing", () => {
    expect(checkOverflow("1111", 5)).toBe("01111");
  });
});

describe("Overflow on negative binary", () => {
  test("Show overflow if binary is negative", () => {
    expect(checkOverflow("-1", 4)).toBe("overflow!");
  });
});
