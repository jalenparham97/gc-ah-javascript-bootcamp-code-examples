const listContainer = document.querySelector('#list-container');

const cars = [
  { makeAndModel: 'Honda Accord', year: 2012 },
  { makeAndModel: 'Chevy Equinox', year: 2004 },
  { makeAndModel: 'Ford Escape', year: 2022 },
  { makeAndModel: 'Honda Civic', year: 2010 },
  { makeAndModel: 'Honda Fit', year: 2015 },
];

createCarsList(cars);

// Add form submit handler
document.querySelector('#addForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Getting the search input value
  const makeAndModel = document.querySelector('#makeAnModelInput').value;
  const year = document.querySelector('#yearInput').value;

  // Create a new car and add it to the list
  cars.push({ makeAndModel, year });

  createCarsList(cars);
});

// Search form submit handler
document.querySelector('#searchForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Getting the search input value
  const searchValue = document.querySelector('#searchInput').value;

  // Search for cars based on the year and (make and model)
  const filteredCars = cars.filter((car) => {
    return (
      car.makeAndModel.toLowerCase().includes(searchValue.toLowerCase()) ||
      car.year.toString().toLowerCase().includes(searchValue.toLowerCase()) // Converting the year property value to a string first
    );
  });

  createCarsList(filteredCars);
});

function createCarsList(carList) {
  // Clear the current list of cars
  if (document.querySelector('ul')) {
    listContainer.removeChild(document.querySelector('ul'));
  }

  const listElement = document.createElement('ul');

  carList.forEach((car) => {
    // Destructuring
    const { makeAndModel, year } = car;
    // Create an li element for each car item
    const carElement = document.createElement('li');
    carElement.innerText = `Make and model: ${makeAndModel} --- Year: ${year}`;
    listElement.appendChild(carElement);
  });

  listContainer.appendChild(listElement);
}
