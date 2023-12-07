const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(word) {
  let count = 0;
  const chars = word.toLowerCase().split("");

  chars.forEach((char) => {
    if (VOWELS.includes(char)) {
      count++;
    }
  });

  return count;
}

module.exports = countVowels;
