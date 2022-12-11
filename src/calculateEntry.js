const data = require('../data/zoo_data');

const verifyEntrants = (entrants) => {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
};

const countEntrants = (entrants) => {
  // seu código aqui
  if (verifyEntrants(entrants) === 0) return 0;
  const countingGeneration = { child: 0, adult: 0, senior: 0 };
  return entrants.reduce((result, currentValue) => {
    if (currentValue.age < 18) {
      countingGeneration.child += 1;
    } else if (currentValue.age < 50) {
      countingGeneration.adult += 1;
    } else {
      countingGeneration.senior += 1;
    }
    return { ...result, ...countingGeneration };
  }, {});
};

const calculateEntry = (entrants) => {
  // seu código aqui
  const countEntrantsByAge = Object.entries(countEntrants(entrants));
  const profitByAge = countEntrantsByAge.map((entrantCount) => {
    let myValue = 0;
    if (entrantCount.includes('child')) myValue = entrantCount[1] * data.prices.child;
    if (entrantCount.includes('adult')) myValue = entrantCount[1] * data.prices.adult;
    if (entrantCount.includes('senior')) myValue = entrantCount[1] * data.prices.senior;
    return myValue;
  });
  return profitByAge.reduce((acc, curr) => acc + curr, 0);
};

module.exports = { calculateEntry, countEntrants };
