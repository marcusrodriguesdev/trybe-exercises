import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { name, type, image } = this.props;
    return (
      <section className="pokemon-card">
        <h1>
          {name}
        </h1>
        <p>
          {type}
        </p>
        <img src={image} />
      </section>
    )
  }
}

export default Pokedex