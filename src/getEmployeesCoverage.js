const data = require('../data/zoo_data');

const getEmployeesByNames = (name) => {
  const findEmployee = data.employees
    .find((employee) => employee.firstName === name || employee.lastName === name);
  return findEmployee;
};

const getEmployeesById = (id) => data.employees.find((employee) => employee.id === id);

const getAnimalById = (id) => data.species.find((specie) => specie.id === id);

const transformDataEmployee = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animalId) => getAnimalById(animalId).name),
    locations: responsibleFor
      .map((animalId) => getAnimalById(animalId).location),
  };
};

const getEmployeesCoverage = (employeeData) => {
  // seu código aqui
  if (!employeeData) return data.employees.map((employee) => transformDataEmployee(employee));
  const { name, id } = employeeData;
  const myEmployee = getEmployeesByNames(name) || getEmployeesById(id);
  if (!myEmployee) throw new Error('Informações inválidas');
  return transformDataEmployee(myEmployee);
};

module.exports = getEmployeesCoverage;
