const exercise1 = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  }
  let resultado = number;
  let firstMultiply = number - 1;
  for (let index = firstMultiply;  index > 1; index-- ) {
    resultado = resultado * index;
  }
  return resultado;
}
console.log(exercise1(4));

const exercise2 = (phrase) => {
  let maior = 0;
  let palavra = null;
  let arrayStr = phrase.split(' ');
  arrayStr.forEach(function(str) {
    if (maior < str.length) {
        maior = str.length;
        palavra = str;
    }
  });
  return palavra;
}
console.log(exercise2('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercise 3
const button = document.getElementById('button');
const clickCounter = document.getElementById('click-counter');

button.addEventListener('click', )

const exercise3 = (event) => {
  const changeColor = document.body.style.backgroundColor;
}


// const exercise3 = (event) => {
//   const curColour = document.body.style.backgroundColor;

//   if (curColour === 'red') {
//       document.body.style.backgroundColor = "blue";
//   }
//   else {
//       document.body.style.backgroundColor = "red";
//   };
// };
