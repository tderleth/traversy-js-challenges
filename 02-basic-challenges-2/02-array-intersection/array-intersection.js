function arrayIntersection(array1, array2) {
  const result = [];

  array1.forEach((element) => {
    if (array2.includes(element)) {
      result.push(element);
    }
  });

  // return only unique ones
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  return [...new Set(result)];
}

module.exports = arrayIntersection;
