function flattenArray(arr) {
  const found = arr.find((element) => Array.isArray(element));

  if (!found) {
    return arr;
  }

  return flattenArray(arr.flatMap((el) => el));
}

module.exports = flattenArray;
