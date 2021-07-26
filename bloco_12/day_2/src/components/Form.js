import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome:'',

    }
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
          <label htmlFor="nome">Nome:
            <input type="text" maxLength="40" id="nome" required />
          </label><br /><br />
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