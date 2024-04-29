const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function findMissingLetter(arr) {
  let result = "";

  for (const [index, element] of arr.entries()) {
    const nextIndex = alphabet.findIndex((el) => el === element) + 1;
    const nextElement = alphabet[nextIndex];

    if (arr[index + 1] !== nextElement) {
      result = nextElement;
      break;
    }
  }

  return result;
}

module.exports = findMissingLetter;
