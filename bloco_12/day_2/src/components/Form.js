import React, { Component } from 'react';
import Text from './Text';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome:'',

    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form">
        <fieldset>
          <Text value={this.state.nome} handleChange={this.handleChange} />

          <label htmlFor="email">Email:
            <input type="text" id="email" name="email" maxLength="50" required />
          </label><br /><br />
          <label>
            
          </label>
        </fieldset>
      </form>
    );
  }
}