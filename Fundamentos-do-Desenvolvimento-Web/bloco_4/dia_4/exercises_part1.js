// exercicio 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem Vinda, ' + info.personagem) 

// ex 2
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'sim',
console.log(info)

// ex 3
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (let index in info) {
  console.log(index)
}

// ex 4
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

for (let index in info) {
  console.log(info[index])
}

// ex 5
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

info.personagem = 'Margarida e Tio Patinhas'
info.origem = 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178'
info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'

console.log(info)