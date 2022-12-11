const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const myAnimal = data.species.find((specie) => specie.name === animal);
  return myAnimal.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
