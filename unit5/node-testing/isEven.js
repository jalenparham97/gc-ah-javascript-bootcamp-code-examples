// If number parameter is divisble by 2 then we want to return true (boolean) else we want to return false (boolean)

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
  // Refactors
  // return number % 2 === 0 ? true : false;
  // if (number % 2 === 0) {
  //   return true;
  // }
  // return false;
  // if (number % 2 === 0) return true;
  // return false;
}

module.exports = isEven;
