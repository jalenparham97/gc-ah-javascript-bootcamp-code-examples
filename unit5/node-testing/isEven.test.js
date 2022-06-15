const isEven = require('./isEven.js');

describe('isEven.js', () => {
  test('Returns true if divisible by 2', () => {
    // Arrange
    const number = 2;

    // Act
    const isEvenNumber = isEven(number);

    // Assert
    expect(isEvenNumber).toBe(true);
  });

  test('Return false if not divisible by 2', () => {
    // Arrange
    const number = 5;

    // Act
    const isEvenNumber = isEven(number);

    // Assert
    expect(isEvenNumber).toBe(false);
  });
});
