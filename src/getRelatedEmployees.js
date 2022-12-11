const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managedEmployees = data.employees
    .filter(({ managers }) => managers.includes(managerId));
  const result = managedEmployees
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  return result;
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
