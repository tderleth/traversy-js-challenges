function removeDuplicates(duplicateArray) {
  const result = [];

  duplicateArray.forEach((element) => {
    let isInArray = false;

    result.forEach((resultElement) => {
      if (element === resultElement) {
        isInArray = true;
      }
    });

    if (!isInArray) {
      result.push(element);
    }
  });

  return result;
}

module.exports = removeDuplicates;
