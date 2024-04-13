const isValidIPv4 = (ip) => {
  const parts = ip.split(".");

  if (parts.length !== 4) {
    return false;
  }

  return parts.find((octet) => octet.startsWith("0") || Number(octet) > 255) ? false : true;
};

module.exports = isValidIPv4;
