import React, { Component } from 'react';
import Button from '../components/Button';
import '../css/Login.css';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import HeaderLogin from '../components/HeaderLogin';
import { submitLogin } from '../redux/actions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkLogin = () => {
    const { email, senha } = this.state;
    if (email === 'teste@gmail.com' && senha === '123456') {
      return alert('login efatuado!');
    } 
    return alert('perfil inexistente');
  }

  onSubmit() {
    const { history, submitLogin } = this.props;
    submitLogin(this.state);
    history.push('/register');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="login">
        <HeaderLogin />
        <form className="form">
          <Input
            className="input"
            type="text"
            placeholder="Celular, e-mail ou nome de usuário"
            name="email"
            onChange={ this.handleChange }
          />
          <Input
            className="input"
            type="password"
            placeholder="Senha"
            name="senha"
            onChange={ this.handleChange }
          />
          <div className="container-Button">
            <Button
              text="Entrar"
              className="button-entrar"
              onClick={ this.onSubmit }
            />
          </div>
        </form>
        <footer className="footer">
            <Link className="link esqueceu" to="/">Esqueceu sua senha? </Link>
            <div className="ponto">.</div>
            <Link className="link inscrever" to="/register">Inscreva-se no Twitter</Link>
          </footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitLogin: (value) => dispatch(submitLogin(value))
});

export default connect(null, mapDispatchToProps)(Login)