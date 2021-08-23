const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';
const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1, 
      }
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }   
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

document.querySelector('#previous').addEventListener('click', () => {
  store.dispatch({ type: PREVIOUS_COLOR });
});

document.querySelector('#next').addEventListener('click', () => {
  store.dispatch({ type: NEXT_COLOR });
});

document.querySelector('#random').addEventListener('click', () => {
  store.dispatch({ type: RANDOM_COLOR });
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.querySelector('#value').innerHTML = colors[index];
  document.querySelector('#container').style.backgroundColor = colors[index];
});
