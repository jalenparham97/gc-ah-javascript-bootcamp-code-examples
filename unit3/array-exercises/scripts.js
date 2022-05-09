// const runnerTimes = [
//   { name: 'Jeff', time: 20, fastestTime: false },
//   { name: 'Amber', time: 10, fastestTime: true },
//   { name: 'Greg', time: 6, fastestTime: true },
//   { name: 'Sarah', time: 15, fastestTime: false },
//   { name: 'Tom', time: 25, fastestTime: false },
// ];

// Declare a function named addRunnerTime
// Parameter(s): array, newName, newTime
// Functionality: construct an object and push it into the array. The object must have the same properties as the objects already in the array. Use conditional statements to set the value for the fastestTime property to true if the time is greater than 10 and false otherwise.

const addRunnerTime = (array, newName, newTime) => {
  const newRunnerTime = {
    name: newName,
    time: newTime,
    // fastestTime: newTime > 10 ? true : false,
  };

  if (newTime > 10) {
    newRunnerTime.fastestTime = true;
  } else {
    newRunnerTime.fastestTime = false;
  }

  array.push(newRunnerTime);
};

// Declare a function named deleteRunnerTimeByIndex
// Parameter(s): array, index
// Functionality: remove the object from the array at the specified index using the splice method.

function deleteRunnerTimeByIndex(array, index) {
  array.splice(index, 1);
}

// deleteRunnerTimeByIndex(runnerTimes, 2);

const runnerTimes = [
  { name: 'Jeff', time: 20, fastestTime: false },
  { name: 'Amber', time: 10, fastestTime: true },
  { name: 'Greg', time: 6, fastestTime: true },
  { name: 'Sarah', time: 15, fastestTime: false },
  { name: 'Tom', time: 25, fastestTime: false },
];

// Declare a function named deleteRunnerTimeByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  Incorporate the findIndex method and the splice method.

const deleteRunnerTimeByName = function (array, name) {
  const index = array.findIndex(
    (runnerTimeObject) => runnerTimeObject.name === name
  );

  array.splice(index, 1);
};

// deleteRunnerTimeByName(runnerTimes, "Tom");

// Declare a function named editRunnerTime
// Parameter(s): array, index, time
// Functionality: update an object’s time in the array at the specified index. Use conditional statements to set the value for the fastestTime property to true if the time is less than or equal to 10 and false otherwise.

function editRunnerTime(array, index, time) {
  array[index].time = time;
  array[index].fastestTime = time <= 10 ? true : false;
}

// continued on the next page…
// Declare a function named findRunnerTimeByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. Use the find method.

// Declare a function named findLowestTime
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

// Declare a function named findAverageTime
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
