// exercicio 1
function palindromo() {
  let verificaPalindrome = 'arara'
  if (verificaPalindrome == 'arara') {
    return true;
  }
  else {
    return false;
  }
}
console.log(palindromo())

// exercicio 2
function exercicio2 () {
  let test = [2, 5, 8, 10, 15, 6];
  for(let index in test) {
    console.log(index)
  } 
}
console.log(exercicio2())


// exercicio 3
function exercicio3() {
  let teste1 = [5, 2, 10, 15];
  let menor = 2;
  for (let index = 0; index < teste1.length; index += 1) {
    if(teste1[index] < menor) {
      menor = teste1[index]
    }
  }
  return menor;
}
console.log(exercicio3())

// exercicio 4
function names() {
  let names = ['joao', 'val', 'Vincius', 'Rafael']
  let menor = names[0]
  for (index = 0; index < names.length; index += 1) {
    menor = names[index].length < menor.length ? names[index] : menor;
  }
  return menor;
}
console.log(names())

// exercicio 5
function moreRepeat () {

}

// exe