function countOccurrences(input, char) {
  let counter = 0;

  input.split("").forEach((el) => {
    if (el === char) counter++;
  });

  return counter;
}

module.exports = countOccurrences;
