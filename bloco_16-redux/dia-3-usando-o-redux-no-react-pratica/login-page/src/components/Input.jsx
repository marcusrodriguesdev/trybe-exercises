import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { name, label, id, onChange, value, type, placeholder, className } = this.props;
    return (
      <label htmlFor={id}>
        <input
          type={ type }
          name={ name }
          id={ id }
          onChange={ onChange }
          value={ value }
          placeholder={ placeholder }
          className={ className }
        />
      </label>
    );
  }
}