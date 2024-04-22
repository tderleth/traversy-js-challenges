function hasUpperCase(char) {
  return char === char.toUpperCase();
}

function hasLowerCase(char) {
  return char === char.toLowerCase();
}

function hasDigit(char) {
  return char >= "0" && char <= "9";
}

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }

  const chars = password.split("");

  if (!chars.some(hasDigit)) {
    return false;
  }

  const charsWithoutNumbers = password.replace(/[0-9]/g, "").split("");

  if (!charsWithoutNumbers.some(hasUpperCase)) {
    return false;
  }

  if (!charsWithoutNumbers.some(hasLowerCase)) {
    return false;
  }

  return true;
}

module.exports = validatePassword;
