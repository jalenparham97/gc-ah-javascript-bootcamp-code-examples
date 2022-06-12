const isEven = require('./isEven.js');

describe('isEven.js', () => {
  test('Returns true if divisible by 2', () => {
    expect(isEven(2)).toBe(true);
  });

  test('Return false if not divisible by 2', () => {
    expect(isEven(5)).toBe(false);
  });
});
