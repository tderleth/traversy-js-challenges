function reverseString(stringToReverse) {
  const arrayOfChars = stringToReverse.split("");

  const result = [];
  for (let index = arrayOfChars.length; index >= 0; index--) {
    result.push(arrayOfChars[index]);
  }

  return result.join("");
}

module.exports = reverseString;
