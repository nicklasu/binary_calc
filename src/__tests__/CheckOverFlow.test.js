import checkOverflow from '../Components/Unsigned/Functions/UnsignedOverflow';

// Show results
describe('Display result as binary on Unsigned component', () => {
  test('Show binary if not overflowing', () => {
    expect(checkOverflow('1111', 4)).toBe('1111');
  });
  test('Show 000 if result is 0 and bit size is 3', () => {
    expect(checkOverflow('000', 3)).toBe('000');
  });
  test('Show 4 digit binary when bit size is 4', () => {
    expect(checkOverflow('01', 4)).toBe('0001');
  });
});

// Check overflow
describe('Display message: overflow!', () => {
  test('Show overflow if it exceeds bit size', () => {
    expect(checkOverflow('11111', 4)).toBe('overflow!');
  });
  test('Show overflow if binary is negative', () => {
    expect(checkOverflow('-1', 4)).toBe('overflow!');
  });
});
