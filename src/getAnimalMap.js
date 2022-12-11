const data = require('../data/zoo_data');

const getAnimalsByLocation = () => {
  const myAnimals = data.species.reduce(
    (result, currentValue) => {
      const { location, name } = currentValue;
      result[location].push(name);
      return result;
    }, { NE: [], NW: [], SE: [], SW: [] },
  );
  return myAnimals;
};

const getAnimal = (name) => data.species.find((specie) => name === specie.name);

const getAnimalNames = (animal) =>
  animal.residents.map((resident) => resident.name);

const getAnimalNamesBySex = (animal, sex) => {
  const myAnimals = animal.residents
    .filter((resident) => resident.sex === sex)
    .map((filteredAnimal) => filteredAnimal.name);
  return myAnimals;
};

const noParamSexOption = (animal, sorted) => {
  let myAnimals = getAnimalNames(getAnimal(animal));
  if (sorted) {
    myAnimals = getAnimalNames(getAnimal(animal))
      .sort((a, b) => a.localeCompare(b));
  }
  return myAnimals;
};

const hasParamSexOption = (animal, sex, sorted) => {
  let myAnimals = getAnimalNamesBySex(getAnimal(animal), sex);
  if (sex && sorted) {
    myAnimals = getAnimalNamesBySex(getAnimal(animal), sex).sort((a, b) =>
      a.localeCompare(b));
  }
  return myAnimals;
};

const verifyOptions = (animal, options) => {
  const { sex, sorted } = options;
  let mySelectedObject = getAnimalsByLocation();
  if (!sex) {
    mySelectedObject = noParamSexOption(animal, sorted);
  } else {
    mySelectedObject = hasParamSexOption(animal, sex, sorted);
  }
  return mySelectedObject;
};

const addNamesToAnimal = (animal, options) => {
  const animalNames = {
    [animal]: verifyOptions(animal, options),
  };
  return animalNames;
};

const transformAnimalMap = (options) => {
  const myAnimals = Object.entries(getAnimalsByLocation());
  return myAnimals.reduce((result, currentValue) => {
    const [location, animals] = currentValue;
    const animalsNamesByLocation = {
      [location]: animals.map((animal) => addNamesToAnimal(animal, options)),
    };
    return { ...result, ...animalsNamesByLocation };
  }, {});
};

const getAnimalMap = (options) => {
  // seu código aqui
  if (!options) return getAnimalsByLocation();
  const { includeNames } = options;
  if (!includeNames) return getAnimalsByLocation();
  return transformAnimalMap(options);
};

// console.log(getAnimalMap({ includeNames: true }));

// console.log(transformAnimalMap({ includeNames: true, sex: 'female'}))
// getAnimalMap()

module.exports = getAnimalMap;
