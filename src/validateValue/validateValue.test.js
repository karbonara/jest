const validateValue = require('./validateValue');

describe('validateValue', () => {
  test('validateValue returns false for invalid values', () => {
    expect(validateValue(-1)).toBe(false);
    expect(validateValue(101)).toBe(false);
  });
  test('validateValue returns true for valid values', () => {
    expect(validateValue(0)).toBe(true);
    expect(validateValue(100)).toBe(true);
  });
});

