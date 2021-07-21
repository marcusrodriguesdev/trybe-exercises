import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { name, type, image } = this.props;
    const { averageWeight } = this.props;
    return (
      <section className="pokemon-card">
        <h1>
          {name}
        </h1>
        <img src={image} />
        <p>
        <strong>{type}</strong> <br /> <br />
          Average Weight:   <strong>{averageWeight.value}
          {averageWeight.measurementUnit}</strong>
        </p>
      </section>
    )
  }
}

export default Pokedex