function validAnagrams(str1, str2) {
  const array1 = str1.split("");
  let array2 = str2.split("");

  for (let char of array1) {
    const index = array2.indexOf(char);
    if (index !== -1) {
      array2.splice(index, 1);
    } else {
      return false;
    }
  }

  return array2.length === 0;
}

module.exports = validAnagrams;
