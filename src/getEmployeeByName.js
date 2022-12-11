const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  const findEmployee = data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName)
     || {};
  return findEmployee;
};

module.exports = getEmployeeByName;
