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

window.onload = () => fetchJoke();
