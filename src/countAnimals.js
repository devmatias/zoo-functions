const data = require('../data/zoo_data');

const getAllAnimals = () => {
  const myAnimals = data.species
    .reduce((result, { name, residents }) => ({ ...result, [name]: residents.length }), {});
  return myAnimals;
};

const countAnimals = (animal) => {
  // seu código aqui
  if (!animal) return getAllAnimals();
  const dataAnimal = data.species.find(({ name }) => name === animal.species);
  const numberOfAnimal = dataAnimal.residents.reduce((result, currentValue) => {
    let increment = false;
    if (!animal.sex) increment = true;
    if (currentValue.sex === animal.sex) increment = true;
    return result + increment;
  }, 0);
  return numberOfAnimal;
};

console.log(countAnimals());

module.exports = countAnimals;
