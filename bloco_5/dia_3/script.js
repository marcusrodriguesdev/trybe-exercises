function createDaysOfTheWeek() {
  let weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  let weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    let days = weekDays[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercico 3
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

let tagFather = document.getElementById('days');
for(let index = 0; index < dezDaysList.length; index += 1) {
  let result = dezDaysList[index];

  let days = document.createElement('li');
  tagFather.appendChild(days)
  days.innerText = result; 
  days.className = 'day'
}

holidays = document.getElementsByTagName('li');
let day24 = document.getElementsByTagName('li')[34];
let day25 = document.getElementsByTagName('li')[35];
let day31 = document.getElementsByTagName('li')[41];
day24.className = 'day holiday';
day25.className = 'day holiday';
day31.className = 'day holiday';

let friday4 = document.getElementsByTagName('li')[14];
let friday11 = document.getElementsByTagName('li')[21];
let friday18 = document.getElementsByTagName('li')[28];
let friday25 = document.getElementsByTagName('li')[35];
friday4.className = 'day friday';
friday11.className = 'day friday';
friday18.className = 'day friday';
friday25.className = 'day holiday friday';

// Exercicio 2
window.onload = createButton;

function createButton (feriados) {
  let tagFather2 = document.getElementsByTagName('div')[2];
  feriados = document.createElement('button');
  tagFather2.appendChild(feriados);
  feriados.id = 'btn-holiday'
  feriados.innerText = 'button'
}

// Exercicio 3