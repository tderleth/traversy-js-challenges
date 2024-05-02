function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function sumUpTo(n) {
  if (n === 1 || n === 0) {
    return n;
  }

  return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;
