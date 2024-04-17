function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((prev, current) => prev + current.mileage, 0);
  const averageMileage = totalMileage / cars.length;
  const highestMileageCar = cars.reduce((prev, current) => (prev.mileage > current.mileage ? prev : current));
  const lowestMileageCar = cars.reduce((prev, current) => (prev.mileage < current.mileage ? prev : current));

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
