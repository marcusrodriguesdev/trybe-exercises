// Exercise 1
const people = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return { nome, email: `${email}@trybe.com` };
}

const newEmployees = (teste) => {
  const employees = {
    id1: teste('Pedro Guerra'),
    id2: teste('Luiza Drumond'), 
    id3: teste('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees(people));

// Exercise 2
const sorteio = (myNumber, checkNumber) => {
  const number = Math.floor(Math.random() * 5) + 1;
  return checkNumber(myNumber, number) ? 'Grande dia, voce ganhou!' : 'Tente de novo!'
}

const checkNumber = (myNumber, number) => myNumber === number;

console.log(sorteio(3, checkNumber));

