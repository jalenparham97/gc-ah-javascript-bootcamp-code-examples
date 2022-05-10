const submissions = [
  { name: 'Jane', score: 95, date: '2020-01-24', passed: true },
  { name: 'Joe', score: 77, date: '2018-05-14', passed: true },
  { name: 'Jack', score: 59, date: '2019-07-05', passed: false },
  { name: 'Jill', score: 88, date: '2020-04-22', passed: true },
];

// #6
function findSubmissionByName(array, name) {
  return array.find((element) => element.name === name);
}

const foundName = findSubmissionByName(submissions, 'Jack');
console.log(foundName);

// #7
function findLowestScore(array) {
  let lowestScoreObject = array[0];

  array.forEach((element) => {
    if (element.score < lowestScoreObject.score) {
      lowestScoreObject = element;
    }
  });

  return lowestScoreObject;
}

const lowestScore = findLowestScore(submissions);
// console.log(lowestScore);

// #8
function findAverageScore(array) {
  let total = 0;

  for (let element of array) {
    total += element.score;
  }

  return total / array.length;
}

const average = findAverageScore(submissions);
// console.log(average);

// #9
function filterPassing(array) {
  return array.filter((element) => element.score >= 60);
}

const passingScores = filterPassing(submissions);
// console.log(passingScores);

// #10
function filter90AndAbove(array) {
  return array.filter((element) => element.score >= 90);
}

const nintyAndAbove = filter90AndAbove(submissions);
// console.log(nintyAndAbove);
