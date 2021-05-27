// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício).
let exercicio1 = document.getElementsByTagName('p')[1].innerText = 'Espero ter conquistado meus objetivos pessoais e profissionais podendo estar trabalhando em uma grande empresa como programador';

// exercicio 2
// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
let exercicio2 = document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

// exercicio 3
// Crie uma função que mude a cor do quadrado vermelho para branco.
let exericio3 = document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

// exercicio 4
//  Crie uma função que corrija o texto da tag <h1>
let exercicio4 = document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaEscript';

// exercicio 5
// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

let exercicio5 = document.getElementsByTagName('p');
  for(let index = 0; index < exercicio5.length; index += 1) {
    exercicio5[index].style.textTransform = 'uppercase';
    console.log(exercicio5[index].innerText)
  }


// exercicio 6 
// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function changeExercise(exercicio6){
exercicio6 = document.getElementsByTagName('p')[0];
return exercicio6;
}
console.log(changeExercise())