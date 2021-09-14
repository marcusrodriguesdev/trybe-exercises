// Exercise 2
const sorteio = (myNumber, checkNumber) => {
  const number = Math.floor(Math.random() * 5) + 1;
  return checkNumber(myNumber, number) ? 'Grande dia, voce ganhou!' : 'Tente de novo!'
}

const checkNumber = (myNumber, number) => myNumber === number;

console.log(sorteio(3, checkNumber));