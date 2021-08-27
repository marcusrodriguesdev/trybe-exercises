import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import '../css/Login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="header">
          <h1 className="title">Entrar no Twitter</h1>
        </div>
        <form className="form">
          <Input
            className="input"
            type="text"
            placeholder="Celular, e-mail ou nome de usuário"
            name=""
          />
          <Input
            className="input"
            type="text"
            placeholder="Senha"
          />
          <div className="container-Button">
            <Button
              text="Entrar"
              className="button-entrar"
            />
          </div>
        </form>
      </div>
    );
  }
}
