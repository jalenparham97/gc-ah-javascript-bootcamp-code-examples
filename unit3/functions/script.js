// Functions

function isEven(number = 4) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEvenNumber = isEven();

// console.log(isEvenNumber);

const restFunction = (param1, param2, ...rest) => {
  // console.log(param1);
  // console.log(param2);
  // console.log(rest);
};

// restFunction(1, 2, 3, 4, 5);

// Create a function that prints numbers from 1 to 10

// function printNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

// Create a function that take an array of numbers and prints out the numbers in the array.
// Use an arrow function.

// const printNumbers = (numbersArray) => {
//   for (let i = 0; i <= numbersArray.length; i++) {
//     console.log(numbersArray[i]);
//   }
// };

// printNumbers([5, 10, 25, 32]);

// Create a function that takes a paramater of an array of numbers and return the sum of all the numbers in the array.
// Function name is sumArray.
// Paramater name is numbers.

// sumArray([1,2,3,4]) // return 10

// Random numbers
// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor(5.999999999));

// Rock paper scissors

// A function named rockPaperScissors that take two paramaters. Paramater one is named player1Selection and paramater two is named player2Selection.

// const rockPaperScissors = (player1Selection, player2Selection) => {
// Rock beats scissors and looses to paper.
// Scissors beats paper and looses to rock.
// Paper beats rock and looses to scissors.

// if player1Selection is equal to "rock" and player2Selection is equal to "paper" then print "Player 2 wins the round."
// if (player1Selection === 'rock' && player2Selection === 'paper') {
//   console.log('Player 2 wins the round');
// } else if (player1Selection === 'paper' && player2Selection === 'scissors') {
//   console.log('Player 2 wins the round');
// } else if (player1Selection === 'rock' && player2Selection === 'scissors') {
//   console.log('Player 1 wins the round');
// } else if (player1Selection === 'paper' && player2Selection === 'rock') {
//   console.log('Player 1 wins the round');
// } else if (player1Selection === 'scissors' && player2Selection === 'paper') {
//   console.log('Player 1 wins the round');
// } else if (player1Selection === 'scissors' && player2Selection === 'rock') {
//   console.log('Player 2 wins the round');
// } else if (player1Selection === player2Selection) {
//   console.log('Its a tie');
// }

// If player 1 selects "paper" then return "Player 1 wins" otherwise return player 2 wins
// return player1Selection === 'paper'
//   ? 'Player 1 wins the round'
//   : 'Player 2 wins the round';
// };

const rockPaperScissors = (player1Selection) => {
  return player1Selection === 'paper'
    ? 'Player 1 wins the round'
    : 'Player 2 wins the round';
};

// const whatDoesItReturn = (paramater) => {
//   return paramater;
// };

const whatDoesItReturn = (paramater) => {
  return paramater >= 21 ? 'Can drive' : false;
};

whatDoesItReturn(21);
// whatDoesItReturn('Some words'); // string
// whatDoesItReturn(true); // boolean

// console.log(rockPaperScissors('paper'));
// console.log(rockPaperScissors('rock'));
// console.log(rockPaperScissors('scissors'));

// rockPaperScissors('paper', 'scissors');
// rockPaperScissors('scissors', 'rock');

// rockPaperScissors('scissors', 'scissors');

// rockPaperScissors('scissors', 'paper');
// rockPaperScissors('rock', 'scissors');
// rockPaperScissors('paper', 'rock');

let a = 1;
while (a < 11) {
  console.log(a);
  a++;
}
