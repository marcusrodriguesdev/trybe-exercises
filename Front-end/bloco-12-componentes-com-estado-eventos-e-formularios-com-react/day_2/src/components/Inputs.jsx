import React, { Component } from 'react';

export default class Inputs extends Component {
  render() {
    const { currentState } = this.props
    const { handleChange } = this.props;
    return (
      <fieldset>
        <label>Nome:
        <input name="nome"
        required
        onChange={handleChange}
        />
        </label>
      </fieldset>
    );
  }
}