const readline = require('readline-sync');

function calculateVelocity() {
  const distancia = readline.questionInt('Qual a distancia do veiculo?');
  const tempo = readline.questionInt('Quanto tempo este veiculo demorou?');
  
  const velocidade = (distancia / tempo).toFixed(2);

  console.log(`O veicula estava ${velocidade} m/s de velocidade`);
}

calculateVelocity();
