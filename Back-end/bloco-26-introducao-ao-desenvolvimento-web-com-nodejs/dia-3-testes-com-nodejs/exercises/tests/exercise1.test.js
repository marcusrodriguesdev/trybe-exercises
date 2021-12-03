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
  });

  it('testa se o numero e neutro', () => {
    const resposta = evaluatorNumber(0);

    expect(resposta).to.be.equal('neutro');
  });
});

describe('2. Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number', () => {

  it('passando um valor de tipo diferente a Number para a função', () => {
    const resposta = evaluatorNumber('Teste');

    expect(resposta).to.be.a('string');
  });

  it('valor retornado para esse caso seja igual uma string "o valor deve ser um número"', () => {
    const resposta = evaluatorNumber('Teste');

    expect(resposta).to.be.equals('o valor deve ser um número');
  });
});