function findMissingLetter(lettersArray) {
  const sortedLettersArray = lettersArray.sort();

  for (let [index, value] of sortedLettersArray.entries()) {
    const expectedNextLetter = String.fromCharCode(value.charCodeAt(0) + 1);

    if (expectedNextLetter !== sortedLettersArray[index + 1]) {
      return expectedNextLetter;
    }
  }
}

module.exports = findMissingLetter;
