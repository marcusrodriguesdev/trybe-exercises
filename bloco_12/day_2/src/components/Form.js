import React, { Component } from 'react';
import Cpf from './Cpf';
import Email from './Email';
import Text from './Text';
import Endereco from './Endereco';

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
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form className="form">
        <fieldset>
          Nome: <Text value={this.state.nome} handleChange={this.handleChange} /><br /><br />

          Email: <Email value={this.state.email} handleChange={this.handleChange} /><br /><br />

          CPF: <Cpf value={this.state.cpf} handleChange={this.handleChange} /><br /><br />

          Endereco: <Endereco value={this.state.endereco} handleChange={this.handleChange} /><br /><br />
        </fieldset>
        <fieldset>
          
        </fieldset>
      </form>
    );
  }
}