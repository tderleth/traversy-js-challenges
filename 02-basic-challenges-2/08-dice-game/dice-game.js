const RESULT_MAP = {
  2: "lose",
  3: "lose",
  4: "roll again",
  5: "roll again",
  6: "roll again",
  7: "win",
  8: "roll again",
  9: "roll again",
  10: "roll again",
  11: "win",
  12: "lose",
};

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function simulateSingleDiceGame() {
  const dice1 = rollDice();
  const dice2 = rollDice();
  const sum = dice1 + dice2;
  const result = RESULT_MAP[sum];

  return { dice1, dice2, sum, result };
}

function diceGameSimulation(numSimulations) {
  const result = [];

  for (let i = 0; i < numSimulations; i++) {
    result.push(simulateSingleDiceGame());
  }

  return result;
}

module.exports = diceGameSimulation;
