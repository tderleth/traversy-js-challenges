function reverseString(str) {
  if (str.length === 1) return str;

  const lastChar = str.substr(str.length - 1);
  const stringWithoutLastChar = str.slice(0, -1);

  return `${lastChar}${reverseString(stringWithoutLastChar)}`;
}

module.exports = reverseString;
