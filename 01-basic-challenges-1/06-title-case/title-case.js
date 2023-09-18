function titleCase(sentence) {
  if (typeof sentence !== "string") {
    throw Error("not a string");
  }

  const words = sentence.split(" ");
  const wordsAdjusted = words.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase());

  return wordsAdjusted.join(" ");
}

module.exports = titleCase;
