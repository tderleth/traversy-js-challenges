function sumOfEvenSquares(array) {
  return array
    .filter((el) => el % 2 === 0)
    .map((el) => el * el)
    .reduce((total, number) => total + number, 0);
}

module.exports = sumOfEvenSquares;
