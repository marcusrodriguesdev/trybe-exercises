import React, { Component } from 'react';

export default class Endereco extends Component {
  render() {
    const { value, handleChange } = this.props;
    
    let error = undefined;
    if (value.length > '200') error = 'Endereco maior que permitido'
    return (
      <label htmlFor="endereco">
        <input type="text" id="" name="endereco" required value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}