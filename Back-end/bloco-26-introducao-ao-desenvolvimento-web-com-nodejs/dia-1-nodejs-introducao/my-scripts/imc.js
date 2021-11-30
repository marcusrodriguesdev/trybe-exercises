const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? (em kg)');
const altura = readline.questionInt('Qual sua altura? (em cm)');

const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

if (imc < 18.5) {
  console.log('abaixo do peso (magreza)');
  return;
} else if (imc >= 18.5 && imc < 24.9) {
  console.log('peso normal');
  return
} else if (imc >= 25 && imc < 29.9) {
  console.log('acima do peso (sobrepeso)');
  return;
} else if (imc >= 30 && imc < 34.9) {
  console.log('obesidade grau I');
  return;
} else if (imc >= 35 && imc < 39.9) {
  console.log('obesidade grau II');
  return;
} else {
  console.log('obesidade graus III e IV');
  return;
}
