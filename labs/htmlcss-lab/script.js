// var name = 'Jalen';

// name = 'Jason';

// var name = 'Henry';

// console.log(name);

// let myName = 'Sarah';

// myName = 'Linda';

// console.log(myName);

// let anotherName = 'Terry';

// anotherName = 'Sam';

// console.log(anotherName);

const me = {
  name: 'Jalen',
  age: 24,
  height: '5 feet 10 inch',
  hasADog: false,
  pets: ['Kayla', 'Pablo'],
};

console.log(me);
console.log(typeof me);

me.age = 21;

console.log(me);
console.log(typeof me);

// Dot notation
console.log(me.name);

// Bracket notation
console.log(me['height']);

const age = 23;
let isDrinkingAge = null;

if (age >= 21) {
  isDrinkingAge = true;
} else {
  isDrinkingAge = false;
}

console.log(isDrinkingAge);
