// Variable type anotations
let age: number = 25;
let isEmployed: boolean = true;
let myName: string = 'Jalen';
let nothing: null = null;
let nothingMore: undefined = undefined;

// Arrays type anotations
let names: string[] = ['Jalen', 'Ren', 'Marlee', 'Ian'];

// Object liters type anotations
const coordinates: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions type anotations
function add(a: number, b: number): number {
  return a + b;
}

// const logString: (value: string) => void = (value) => {
//   console.log(value);
// };
const logString = (value: string): void => {
  console.log(value);
};

// add(10, 5);

// Optional Parameters

// Optional parameter is when we do not want to be required to pass an argument to the function.
const logNumber = (value?: number): void => {
  console.log(value);
};

// Default parameter is when we give the paramter/s a default value if no argument is passed.
const logBoolean = (value: boolean = true): void => {
  console.log(value);
};

// logNumber();
// logBoolean();
// logBoolean(false);

type Person = {
  name: string;
  age: number;
};

const people: Person[] = [
  { name: 'Jalen', age: 10 },
  { name: 'Jeff', age: 12 },
];

people.forEach((person: Person) => {
  console.log(person.name);
});
