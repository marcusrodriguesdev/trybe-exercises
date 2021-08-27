import React, { Component } from 'react';
import Button from '../components/Button';
import icon from '../images/icon.jpg'
import '../css/Login.css';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="header">
          <div className="container-icon">
            <img src={ icon } alt="" className="icon" />
          </div>
          <h1 className="title">Entrar no Twitter</h1>
        </header>
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
          <div className="link-container">
            <Link className="link esqueceu" to="/">Esqueceu sua senha? </Link>
            <div className="ponto">   .   </div>
            <Link className="link inscrever" to="register">Inscreva-se no Twitter</Link>
          </div>
        </form>
      </div>
    );
  }
}
