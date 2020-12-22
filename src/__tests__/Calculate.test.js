import calculate from '../Functions/Calculate';

describe('Testing function calculate', () => {
  it('Returns the correct sum with numbers', () => {
    expect(calculate(1, 2, '+')).toBe(3);
  });
  it('Returns the correct sum with numbers as strings', () => {
    expect(calculate('1', '2', '+')).toBe(3);
  });
  it('Returns the correct result when subtracting numbers', () => {
    expect(calculate(1, 2, '-')).toBe(-1);
  });
  it('Returns NaN if called with invalid numbers', () => {
    expect(calculate('text', 2, '+')).toBe(NaN);
  });
  it('Returns undefined if called with no sign', () => {
    expect(calculate(1, 2)).toBe(undefined);
  });
  it('Returns undefined if called with no numbers', () => {
    expect(calculate('+')).toBe(undefined);
  });
});
