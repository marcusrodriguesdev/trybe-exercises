const readline = require('readline-sync');
const peso = readline.questionInt('Qual seu peso? (em kg)');
const altura = readline.questionInt('Qual sua altura? (em cm)');

const imc = (peso, altura) => {
  return peso / Math.pow(altura, 2).toFixed(2);
}
