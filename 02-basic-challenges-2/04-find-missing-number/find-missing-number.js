function findMissingNumber(array) {
  let result;

  array
    .sort((a, b) => a - b)
    .forEach((element, index) => {
      if (index === array.length - 1) {
        return;
      }

      if (array[index + 1] !== element + 1) {
        result = element + 1;
      }
    });

  return result;
}

module.exports = findMissingNumber;
