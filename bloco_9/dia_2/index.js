// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const addJoke = (data) => {
  const jokeContainer = document.getElementById('jokeContainer')
  jokeContainer.textContent = data.joke;
}

const fetchJoke = () => {
  const object = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }
  fetch(API_URL, object)
    .then(response => response.json())
    .then(object => addJoke(object));
};

const promise = () => {
  return new Promise((resolve, reject) => {
    const array = [20 ** 2, 5 ** 2, 7 ** 2, 11 ** 2, 30 ** 2, 9 ** 2, 22 ** 2, 3 ** 2, 23 ** 2, 16 ** 2];
    const someNumbers = array.reduce((acc, curr) => acc + curr, 0)
    if (someNumbers < 8000) {
      resolve(number)
    }
    reject(error)
  })
  .then(number => console.log('Promise resolvida'))
  .catch(error => console.log('Promise rejeitada'))
}

window.onload = () => fetchJoke();
