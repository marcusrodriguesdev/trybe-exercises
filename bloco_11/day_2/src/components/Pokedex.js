import React from 'react';
import PropTypes from 'prop-types';

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

Pokedex.prototypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: {
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  },
  image: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
}

export default Pokedex;