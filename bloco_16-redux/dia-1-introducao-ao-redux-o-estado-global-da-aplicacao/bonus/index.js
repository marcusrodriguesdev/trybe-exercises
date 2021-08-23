window.onload = () => {
  const INITIAL_STATE = {
    theme: 'white',
  }
  
  const CHANGE_DARK_THEME = 'CHANGE_DARK_THEME';
  const CHANGE_LIGHT_THEME = 'CHANGE_LIGHT_THEME';
  const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case CHANGE_DARK_THEME:
        return {
          ...state,
          theme: 'black',
        }
      case CHANGE_LIGHT_THEME:
        return {
          ...state,
          theme: 'white',
        }
      default:
        return state;
    }
  };
  
  const store = Redux.createStore(reducer)
  
  document.querySelector('#change-theme').addEventListener('click', () => {
    const { theme } = store.getState();
    if (theme === 'white') {
      store.dispatch({ type: CHANGE_DARK_THEME });
    } else {
      store.dispatch({ type: CHANGE_LIGHT_THEME });
    }
  });

  store.subscribe(() => {
    const { theme } = getState();
    document.querySelector('#container').style.backgroundColor = theme;
  });
}