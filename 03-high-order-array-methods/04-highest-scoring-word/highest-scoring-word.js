const alphabetMap = new Map([..."abcdefghijklmnopqrstuvwxyz"].map((letter, index) => [letter, index]));

function highestScoringWord(sentence) {
  let max = { word: "", count: 0 };

  sentence.split(" ").forEach((word) => {
    const count = [...word].reduce((total, char) => total + alphabetMap.get(char), 0);

    if (count > max.count) {
      max = { word, count };
    }
  });

  return max.word;
}

module.exports = highestScoringWord;
