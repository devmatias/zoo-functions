const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se ao não receber parametro, recebe undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se ao receber parametros que não sejam strings entrega a mensagem de erro', () => {
    expect(handlerElephants(3)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se a quantidade de elefantes é 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa se ao buscar o param names, entrega os nomes em um array', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });
  it('Testa se o param averageAge mostra a média de idade dos elefantes buscados', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se o param como string não válido entrega null', () => {
    expect(handlerElephants('outra string')).toBeNull();
  });
  it('Testa se ao receber um param que o objeto possui, entrega o value desse param', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
});
