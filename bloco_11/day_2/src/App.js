
import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="cabecalho">
          <h1>My Pokedex</h1>
        </header>
      <div className="pokemons-list">
        {pokemons.map(({name, type, id, image}) => (
          <Pokedex 
          key={id}
          name={name}
          type={type}
          image={image}
          />
        ))}
      </div>
      </div>
    )
}
}

export default App;
