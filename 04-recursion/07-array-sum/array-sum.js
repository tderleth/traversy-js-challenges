function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const first = arr.shift();

  return first + arraySum(arr);
}

module.exports = arraySum;
