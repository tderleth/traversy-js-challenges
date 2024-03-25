function calculateTotalSalesWithTax(products, taxRate) {
  const factor = 1 + taxRate / 100;
  const amount = products.reduce((total, { quantity, price }) => total + quantity * price, 0);

  return amount * factor;
}

module.exports = calculateTotalSalesWithTax;
