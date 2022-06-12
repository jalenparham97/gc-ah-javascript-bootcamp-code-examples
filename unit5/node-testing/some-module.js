const chalk = require('chalk');

const helloWorld = 'Hello World!';

function greeting(message) {
  console.log(chalk.red(message));
}

module.exports = { helloWorld, greeting };
