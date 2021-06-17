const exercise1 = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} otimo, fui utilizada no escopo!`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(`${elseScope} fui utilizada fora do escopo`);
  }
}

console.log(exercise1())

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort(function compare(a, b) {
  return a -b
});

console.log(oddsAndEvens);