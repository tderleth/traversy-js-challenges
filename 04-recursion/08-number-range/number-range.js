function numberRange(start, end) {
  if (start === end) {
    return [end];
  }

  const numbers = numberRange(start, end - 1);

  return numbers.push(end);
}

module.exports = numberRange;
