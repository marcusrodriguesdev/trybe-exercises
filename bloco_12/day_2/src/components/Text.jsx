import React, { Component } from 'react';

export default class Text extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="nome">
        <input type="text" maxLength="40" id="" name="nome" required value={value} onChange={handleChange} />
      </label>
    );
  }
}