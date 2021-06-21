const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 2
const chaves = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// Exercicio 3
const size = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// Exercicio 4
const tamanho = (obj) =>  Object.values(obj);
console.log(tamanho(lesson1));

// // Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });