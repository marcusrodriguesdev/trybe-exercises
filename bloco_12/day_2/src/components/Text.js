import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="nome">Nome:
        <input type="text" maxLength="40" id="nome" name="nome" required value={value} onChange={handleChange} />
      </label>
    );
  }
}