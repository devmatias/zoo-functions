const data = require('../data/zoo_data');

const verifyParamAnimalName = (scheduleTarget) =>
  data.species.some(({ name }) => scheduleTarget === name);

const verifyParamDay = (scheduleTarget) =>
  Object.keys(data.hours).some((day) => scheduleTarget === day);

const getAllDaysSchedule = () => {
  const hoursInArray = Object.entries(data.hours);
  return hoursInArray.reduce((result, currentValue) => {
    const infoPerDay = {
      [currentValue[0]]: {
        officeHour: currentValue[0] !== 'Monday'
          ? `Open from ${currentValue[1].open}am until ${currentValue[1].close}pm`
          : 'CLOSED',
        exhibition:
          currentValue[0] !== 'Monday' ? data.species
            .filter((specie) => specie.availability.includes(currentValue[0]))
            .map((specie) => specie.name) : 'The zoo will be closed!',
      },
    };
    return { ...result, ...infoPerDay };
  }, {});
};

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  if (verifyParamDay(scheduleTarget)) {
    return { [scheduleTarget]: getAllDaysSchedule()[scheduleTarget] };
  } if (verifyParamAnimalName(scheduleTarget)) {
    return data.species.find(({ name }) => name === scheduleTarget).availability;
  } return getAllDaysSchedule();
};

console.log(getSchedule('Monday'));

module.exports = getSchedule;
