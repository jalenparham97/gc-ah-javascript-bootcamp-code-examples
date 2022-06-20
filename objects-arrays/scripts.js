// forEach
const myArray = [1, 2, 3, 4];

// You have access to the element in the array, the index in the array, and the entire array.
// myArray.forEach((element, index, array) => console.log(element, index, array));

// map
const cars = [
  { makeAndModel: 'Honda Accord', year: 2012 },
  { makeAndModel: 'Chevy Equinox', year: 2004 },
  { makeAndModel: 'Ford Escape', year: 2022 },
  { makeAndModel: 'Honda Civic', year: 2010 },
  { makeAndModel: 'Honda Fit', year: 2015 },
];

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const newCars = cars.map((car, index, array) => {
  switch (car.makeAndModel) {
    case 'Honda Accord':
      return { ...car, color: 'red' };
    case 'Chevy Equinox':
      return { ...car, color: 'blue' };
    case 'Ford Escape':
      return { ...car, color: 'green' };
    default:
      return car;
  }

  // Return an object that has all the properties of the current car with a color property added.
  // return { ...car, color: randomColor() };
});

// console.log(newCars);

// filter
const greaterThan2010 = cars.filter((car) => car.year >= 2010);
const lessThan2010 = cars.filter((car) => car.year < 2010);

// console.log('greaterThan2010: ', greaterThan2010);
// console.log('lessThan2010: ', lessThan2010);
// console.log('cars: ', cars);

// find
const foundCar = newCars.find((car) => {
  return car.color === 'green';
});

// console.log(foundCar);

// Object.values
const car = { makeAndModel: 'Honda Accord', year: 2012, color: 'red' };
const empty = {};

const isEmptyObject = (object) => {
  return Object.values(object).length === 0;
};

console.log(isEmptyObject(car));

// Object.keys
console.log(Object.keys(car));

// Object.freeze
Object.freeze(car);
// car.year = 1999;

console.log(car);
