const chalk = require('chalk');
const { helloWorld, greeting } = require('./some-module.js');

console.log(chalk.blue(helloWorld));

greeting(helloWorld);

const myObject = {
  name: 'Jalen',
  age: 25,
};

// const name = myObject.name;
// const age = myObject.age;

// Destructure
const { name, age } = myObject;

console.log(name);
console.log(age);
