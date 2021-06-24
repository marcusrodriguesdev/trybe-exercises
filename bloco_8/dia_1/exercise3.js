// Exercise 3
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'C', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const prova = (rightAnswers, studentAnswers, callBack) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    let resultado = callBack(rightAnswers[index], studentAnswers[index]);
    contador = contador + resultado;
  }
  return `resultado final: ${contador} corretas`;
}

const callBack = (right, student) => {
  if (right === student) {
    return 1;
  } if (student === 'N.A') {
    return 0;
  }
  return -0.5;
}

console.log(prova(rightAnswers, studentAnswers, callBack));