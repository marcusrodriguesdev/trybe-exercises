import React, { Component } from 'react';

export default class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="email">
        <input type="email" maxLength="50" id="" name="email" required value={value} onChange={handleChange} />
      </label>
    );
  }
}