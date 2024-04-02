function generateHashtag(str) {
  if (str.length > 140 || str.trim() === "") {
    return false;
  }

  return (
    "#" +
    str
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
}

module.exports = generateHashtag;
