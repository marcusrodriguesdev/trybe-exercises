import React, { Component } from 'react';
import Inputs from './Inputs';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome:'',
      email:'',
      cpf:'',
      endereco:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    
    if(name === 'nome') value = value.toUpperCase();
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form">
        <Inputs handleChange={ this.handleChange } currentState={this.state} />

      </form>
    );
  }
}