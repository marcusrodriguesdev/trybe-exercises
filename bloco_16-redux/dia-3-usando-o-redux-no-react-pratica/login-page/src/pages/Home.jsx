import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="welcome">
          <h1
            className="title-home"
          >
            Bem Vindo e Bem Vinda!
          </h1>
        </div>
        <div>
          <span className="cadastro">Já tem uma conta? </span>
          <Link
            to="/login"
            className="link"
          >
            Entre
          </Link>
        </div>
        <div className="login-register">
          <span className="cadastro">Não tem uma conta? </span>
          <Link
            to="/register"
            className="link"
          >
            Inscreva-se
          </Link>
        </div>
      </div>
    );
  }
}
