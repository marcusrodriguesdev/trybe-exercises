// exercicio 1
let body = document.querySelector('body');
let bodyChild = document.createElement('h1');
body.appendChild(bodyChild);
bodyChild.innerText = 'Exercício 5.2 - JavaScript DOM'

// exercicio 2
let container = document.createElement('div');
body.appendChild(container);
container.className = ('main-content');

// exercicio 3
let passada = document.querySelector('div');
let createNewDiv = document.createElement('div');
passada.appendChild(createNewDiv);
createNewDiv.className = ('center-content');

// exercicio 4 
let div3 = document.querySelector('.center-content');
let paragraph = document.createElement('p');
div3.appendChild(paragraph);
paragraph.innerText = ('Deus e bommm!!');

// exercicio 5 
// crie a tag div
let createTag = document.createElement('div');
createTag.className = ('left-content');
let tagMother = document.getElementsByTagName('div')[0];
tagMother.appendChild(createTag);

// exercicio 6
// crie a tag div
let createTag2 = document.createElement('div');
createTag2.className = ('right-content');
let tagFather = document.getElementsByTagName('div')[0];
tagFather.appendChild(createTag2);

// exercicio 7
// adicionar a tag img
let createImage = document.createElement('img');
createImage.src = ('https://picsum.photos/200');
createImage.className = ('small-image');
// fazer o elemento ser filho da div do passo 5;
let mother = document.getElementsByTagName('div')[2];
mother.appendChild(createImage);

// exercicio 8
// crie uma tag ul
let createList = document.createElement('ul');
let motherTwo = document.getElementsByTagName('div')[3];
motherTwo.appendChild(createList);
// lista de 1 a 10
let string = [
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
  'TextTest',
];

let lista = document.getElementsByTagName('ul')[0];
for(let index = 0; index < string.length; index += 1) {
  let result = string[index];

  let createItens = document.createElement('li');
  createItens.innerText = result;

  lista.appendChild(createItens);
}

// exercicio 9 
// criar tag h3 
let h3 = '';
for(let index = 0; index < 3; index += 1) {
  h3 = document.createElement('h3')
  h3.innerHTML = 'Lets Go'
  h3.className = 'description'

  let divPass2 = document.getElementsByTagName('div')[0].appendChild(h3);
}

//  PARTE 2 DO EXERCICIO 
// Exercicio 1
bodyChild.className = ('title');

// Exercicio 2
let remove = document.getElementsByTagName('div')[0];
let item = document.getElementsByTagName('div')[2];

remove.removeChild(item)

// Exercicio 3
let alterationPosition = document.getElementsByTagName('div')[2];
alterationPosition.style.marginRight = 'auto';

// e