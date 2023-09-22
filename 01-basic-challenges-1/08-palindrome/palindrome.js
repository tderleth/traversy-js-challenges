function isPalindrome(word) {
  const chars = word.toLowerCase().replace(" ", "").split("");
  const amountChars = chars.length;

  for (let index = 0; index < amountChars / 2; index++) {
    if (chars[index] != chars[amountChars - 1 - index]) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindrome;
