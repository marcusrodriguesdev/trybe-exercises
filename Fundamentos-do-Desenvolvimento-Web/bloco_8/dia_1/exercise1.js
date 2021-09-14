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
