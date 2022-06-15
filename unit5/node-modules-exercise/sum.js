function calcSum(numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}
// Default Export
module.exports = calcSum;
