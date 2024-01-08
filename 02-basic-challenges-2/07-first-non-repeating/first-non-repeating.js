function findFirstNonRepeatingCharacter(repeatingString) {
  let result = null;
  const array = repeatingString.slice("");

  for (let i = 0; i < array.length; i = i + 2) {
    if (array[i] !== array[i + 1]) {
      result = array[i];
      break;
    }
  }

  return result;
}

module.exports = findFirstNonRepeatingCharacter;
