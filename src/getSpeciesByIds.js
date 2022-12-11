const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const myFilter = data.species.filter((specie) => {
    const myId = ids.find((id) => id === specie.id);
    return specie.id === myId;
  });
  return myFilter;
};

module.exports = getSpeciesByIds;
