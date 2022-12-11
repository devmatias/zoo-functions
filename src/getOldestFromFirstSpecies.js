const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const firstAnimalResponsible = findEmployee.responsibleFor[0];
  const findAnimal = data.species
    .find((specie) => specie.id === firstAnimalResponsible);
  const findOldestAnimal = findAnimal.residents
    .reduce((result, currentValue) => (result.age > currentValue.age ? result : currentValue),
      { name: '', sex: '', age: 0 });
  return Object.values(findOldestAnimal);
};

module.exports = getOldestFromFirstSpecies;
