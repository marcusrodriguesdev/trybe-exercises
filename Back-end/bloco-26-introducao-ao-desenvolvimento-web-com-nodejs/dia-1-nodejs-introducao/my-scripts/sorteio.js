const readline = require('readline-sync');

function result(numero, resposta) {
  if (numero !== resposta) {
    console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  } else { 
    return console.log('Parabens, numero certo');
  }
}

function prizeDrawNumber() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt(
    'digite um numero de 1 a 10 pra eu ver um trem'
  );
  result(numero, resposta);

  const novamente = readline.question(
    'Se deseja jogar novamente escreva "S", se nao qualquer outra.'
  );

  if (novamente !== 'S') {
    console.log('Ok, ate a proxima');
  } else {
    prizeDrawNumber();
  }
}

prizeDrawNumber();