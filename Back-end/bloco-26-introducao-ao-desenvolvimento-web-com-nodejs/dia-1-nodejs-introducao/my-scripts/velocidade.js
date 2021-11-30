const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distancia do veiculo?');
const tempo = readline.questionInt('Quanto tempo este veiculo demorou?');

const velocidade = (distancia / tempo);

console.log(velocidade);