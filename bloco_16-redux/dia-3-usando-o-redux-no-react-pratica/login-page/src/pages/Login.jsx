import React, { Component } from 'react';
import Button from '../components/Button';
import '../css/Login.css';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import HeaderLogin from '../components/HeaderLogin';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <HeaderLogin />
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
        <footer className="footer">
            <Link className="link esqueceu" to="/">Esqueceu sua senha? </Link>
            <div className="ponto">   .   </div>
            <Link className="link inscrever" to="register">Inscreva-se no Twitter</Link>
          </footer>
      </div>
    );
  }
}
