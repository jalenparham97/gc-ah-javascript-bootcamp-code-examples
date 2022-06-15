const isEven = require('./isEven.js');

test('toHaveLength', () => {
  // Arrange
  const myArray = [1, 2, 3, 4, 5];

  // Assert
  expect(myArray).toHaveLength(5);
});

test('toContain', () => {
  // Arrange
  const myArray = [1, 2, 3, 4, 5];

  // Assert
  expect(myArray).toContain(3);
});

test('toHaveReturnedWith', () => {
  // Arrange
  const number = 2;
  const isEven = jest.fn((number) => number % 2 === 0);

  // Act
  isEven(number);

  // Assert
  expect(isEven).toHaveReturned();
  expect(isEven).toHaveReturnedWith(true);
});
