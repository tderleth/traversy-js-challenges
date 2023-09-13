const ALLOWED_OPERATORS = ["/", "+", "-", "*"];

function calculator(a, b, operator) {
  if (!ALLOWED_OPERATORS.find((el) => el === operator)) {
    throw new Error(`${operator} not allowed`);
  }

  return operator === "-" ? a - b : operator === "+" ? a + b : operator === "*" ? a * b : a / b;
}

module.exports = calculator;
