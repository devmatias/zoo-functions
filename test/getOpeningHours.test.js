const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se a função sem parametros entrega o objeto específico', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa se a função com parametros corretos entrega o objeto específico', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '12:00-PM')).toBe('The zoo is open');
  });

  it('Testa se a função com parametro day sendo uma string aleatoria entrega dayError', () => {
    expect(() => {
      getOpeningHours('outra string', '09:00-PM');
    }).toThrow(new Error('The day must be valid. Example: Monday'));
  });

  it('Testa se o parametro dataHours entrega um erro por não ser número', () => {
    expect(() => {
      getOpeningHours('Monday', 'oi:00-PM');
    }).toThrow(new Error('The hour should represent a number'));
  });

  it('Testa se o parametro dataMinutes entrega um erro por não ser número', () => {
    expect(() => {
      getOpeningHours('Monday', '09:oi-PM');
    }).toThrow(new Error('The minutes should represent a number'));
  });

  it('Testa se o parametro abbreviation entrega um erro por não ser AM ou PM', () => {
    expect(() => {
      getOpeningHours('Monday', '09:00-chama');
    }).toThrow(new Error('The abbreviation must be "AM" or "PM"'));
  });

  it('Testa se o parametro dataHour entrega erro se não estiver entre 0 e 12', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-PM');
    }).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Testa se o parametro dataMinutes entrega erro se não estiver entre 0 e 59', () => {
    expect(() => {
      getOpeningHours('Monday', '09:70-PM');
    }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
});
