function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('testa a funcao de soma', () => {
  test(' soma de numeros ', () => {
    expect((9)).toBe(sum(4, 5));
    expect((0)).toBe(sum(0, 0));
    expect(() => { sum(4,  '5')}).toThrow();
  });
});