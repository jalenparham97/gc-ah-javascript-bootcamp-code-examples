const cowsay = require('cowsay');
const { shuffle } = require('lodash');
// Require data.js
const { numbers, name, hometown } = require('./data.js');
// Require sum.js
const calcSum = require('./sum.js');

console.log(numbers);
console.log(`${name} is from ${hometown}.`);

const sum = calcSum(numbers);
console.log(sum);

console.log(
  cowsay.say({
    text: 'Hello World!',
  })
);

console.log(shuffle(numbers));
