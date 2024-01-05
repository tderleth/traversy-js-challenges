function areAllCharactersUnique(inputString) {
  let result = true;
  const inputArray = inputString.split("");

  for (let outerIndex = 0; outerIndex < inputArray.length && result; outerIndex++) {
    const innerElement = inputArray[outerIndex];
    for (let innerIndex = outerIndex + 1; innerIndex < inputArray.length && result; innerIndex++) {
      const outerElement = inputArray[innerIndex];
      if (innerElement === outerElement) {
        result = false;
      }
    }
  }

  return result;
}

module.exports = areAllCharactersUnique;
