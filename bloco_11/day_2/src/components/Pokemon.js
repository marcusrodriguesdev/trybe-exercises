import React from 'react';
import Pokedex from './Pokedex';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <section className='pokemon'>
        <div className="image">
          <div>
            <h2>{ name }</h2>
            <p>{ type }</p>
            <p>{`Average weight: ${ averageWeight.value }${ averageWeight.measurementUnit }`}</p>
          </div>
          <div>
            <img src={ image } alt={ name } />
          </div>
        </div>
      </section>
    );
  }
}

Pokemon.prototypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: {
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  },
  image: PropTypes.string.isRequired,
  moreInfo: PropTypes.string.isRequired,
}