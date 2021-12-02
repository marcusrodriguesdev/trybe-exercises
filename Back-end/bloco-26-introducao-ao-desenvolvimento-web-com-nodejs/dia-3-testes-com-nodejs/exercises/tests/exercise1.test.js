const { expect } = require('chai');

const evaluatorNumber = require('../evaluatorNumber')

describe('1. Essa função irá receber um número como parâmetro e retornar uma string como resposta', () => {
  it('testa se o numero e positivo', () => {
    const resposta = evaluatorNumber(4);
    expect(resposta).to.be.equals('positivo');
  });

  it('testa se o numero e negativo', () => {
    const resposta = evaluatorNumber(-4);
    expect(resposta).to.be.equals('negativo');
  })

  it('testa se o numero e neutro', () => {
    const resposta = evaluatorNumber(0);

    expect(resposta).to.be.equal('neutro');
  })
});