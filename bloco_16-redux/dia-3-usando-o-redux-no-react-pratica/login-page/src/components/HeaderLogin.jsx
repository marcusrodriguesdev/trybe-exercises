import React, { Component } from 'react';
import '../css/Login.css';
import icon from '../images/icon.jpg'

export default class HeaderLogin extends Component {
  render() {
    return (
      <header className="header">
          <div className="container-icon">
            <img src={ icon } alt="" className="icon" />
          </div>
          <h1 className="title">Entrar no Twitter</h1>
      </header>
    );
  }
}