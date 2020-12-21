import checkOverflow from "./UnsignedOverflow";

// Show results
describe("Display result as binary on Unsigned component", () => {
  test("Show binary if not overflowing", () => {
    expect(checkOverflow("1111", 4)).toBe("1111");
  });
  test("Show binary with added zeros", () => {
    expect(checkOverflow("01", 4)).toBe("0001");
  });
});

// Check overflow
describe("Display message: overflow!", () => {
  test("Show overflow if it exceeds bit size", () => {
    expect(checkOverflow("11111", 4)).toBe("overflow!");
  });
  test("Show overflow if binary is negative", () => {
    expect(checkOverflow("-1", 4)).toBe("overflow!");
  });
});
