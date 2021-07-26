import React, { Component } from 'react';

export default class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Cpf">
        <input type="Cpf" maxLength="40" id="" name="Cpf" required value={value} onChange={handleChange} />
      </label>
    );
  }
}