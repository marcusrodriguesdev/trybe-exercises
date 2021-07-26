import React, { Component } from 'react';

export default class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="cpf">
        <input type="text" maxLength="11" id="" name="cpf" required value={value} onChange={handleChange} />
      </label>
    );
  }
}