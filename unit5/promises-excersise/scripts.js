// When chaining promises with .then() the return value from the .then() will be trasfered to the next .then() in the chain.
// If the current .then() in the chain does not return a value the next .then() value will be undefined.

const apiPromise = fetch(
  'https://grandcircusco.github.io/demo-apis/donuts.json'
)
  .then((res) => {
    console.log(res);
    return res.json(); // Getting the json data from the response object
  })
  .then((donuts) => {
    console.log(donuts);
    return 'Hello World';
  })
  .then((count) => console.log(count))
  .catch((error) => console.log(error));

// Step 1
apiPromise.then((data) => console.log(data));

// Step 2
apiPromise.then((donuts) => console.log('Step 2: ', donuts.count));

// Step 3
const countPromise = apiPromise.then((donuts) => {
  return donuts.count;
});
countPromise.then((count) => console.log('Step 3: ', count));

// Step 4
const top4Promise = apiPromise.then((donuts) => {
  const top4Donuts = donuts.results.slice(0, 4);
  return top4Donuts;
});
top4Promise.then((first4) => console.log(first4));

// Step 5
const namesPromise = apiPromise.then((donuts) => {
  const donutNames = donuts.results.map((donut) => donut.name);
  return donutNames;
});
namesPromise.then((names) => console.log(names));

// Step 6
const capNamesPromise = namesPromise.then((donutNames) =>
  donutNames.map((name) => name.toUpperCase())
);
capNamesPromise.then((capNames) => console.log(capNames));

// Step 7
let badPromise = fetch(
  'https://grandcircusco.github.io/demo-apis/wrong.json'
).then((res) => res.json());

badPromise.catch((err) => console.log('FAILED: ', err));
