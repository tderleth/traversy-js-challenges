function findMaxNumber(numberArray) {
  let max = numberArray[0];

  numberArray.forEach((el) => {
    if (el > max) {
      max = el;
    }
  });

  return max;
}

module.exports = findMaxNumber;
