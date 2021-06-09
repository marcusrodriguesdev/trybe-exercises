// Desafio 1
function compareTrue() {
  // seu código aqui
function compareTrue(valor1, valor2, resultado) {
  if (valor1 === true && valor2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea() {
  // seu código aqui
function calcArea(base, height) {
  let trianguloArea = (base * height) / 2;
  return trianguloArea;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
function splitSentence(splitString) {
  return splitString.split(' ');
}

// Desafio 4
function concatName() {
  // seu código aqui
function concatName(frases) {
  let primeiro = '';
  let retorno = '';
  primeiro = frases[frases.length - 1];
  retorno = `${primeiro}, ${frases[0]}`;
  return retorno;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
function highestCount(number) {
  let maxNumber = Math.max.apply(null, number);
  let repeatNumber = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] === maxNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
function getsAbsoluteValue(number) {
  if (number < 0) {
    number *= -1;
  }
  return (number);
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = getsAbsoluteValue(mouse - cat1);
  let distanceCat2 = getsAbsoluteValue(mouse - cat2);
  if (distanceCat1 === distanceCat2) {
    return ('os gatos trombam e o rato foge');
  } if (distanceCat1 < distanceCat2) {
    return ('cat1');
  }
  return ('cat2');
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
function fizzBuzz(array1) {
  for (let index = 0; index < array1.length; index += 1) {
    switch (true) {
    case array1[index] % 15 === 0:
      array1[index] = 'fizzBuzz';
      break;
    case array1[index] % 3 === 0:
      array1[index] = 'fizz';
      break;
    case array1[index] % 5 === 0:
      array1[index] = 'buzz';
      break;
    default:
      array1[index] = 'bug!';
      break;
    }
  }
  return array1;
}

// Desafio 9
function encode() {
  // seu código aqui
function encode(array) {
  for (let index = 0; index < array.length; index += 1) {
    array = array.replace('a', '1');
    array = array.replace('e', '2');
    array = array.replace('i', '3');
    array = array.replace('o', '4');
    array = array.replace('u', '5');
  }
  return array;
}
function decode() {
  // seu código aqui

function decode(array) {
  for (let index = 0; index < array.length; index += 1) {
    array = array.replace('1', 'a');
    array = array.replace('2', 'e');
    array = array.replace('3', 'i');
    array = array.replace('4', 'o');
    array = array.replace('5', 'u');
  }
  return array;
}


// Desafio 10
function techList() {
  // seu código aqui
function techList(arrTech, lame) {
  let arr2 = [];
  if (arrTech.length === 0) return 'Vazio!';
  arrTech.sort().forEach((element) => { arr2.push({ tech: element, name: lame }); });
  return arr2;
}
}
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
function triangleCheck(lineA, lineB, lineC) {
  let sumA = lineB + lineC; 
  let sumB = lineA + lineC; 
  let sumC = lineB + lineA; 

  let testA = Math.abs(lineB - lineC); 
  let testB = Math.abs(lineA - lineC);
  let testC = Math.abs(lineB - lineA); 

  if (lineA > sumA || lineB > sumB || lineC > sumC) {
    return false;
  } else {
    if (lineA > testA && lineB > testB && lineC > testC){
      return true;
    } else {
      return false;
    }
  }
}
};

