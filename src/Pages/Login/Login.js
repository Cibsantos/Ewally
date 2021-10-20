import React, { Component } from 'react';

import './login.css';
import logo from '../../Assets/images/logo-ewally.png';
import Footer  from '../../Components/Footer/Footer';


const EWALLY_API = 'https://apidev.ewally.com.br/user/login';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      token: '',
    };

    this.setUserName = (event) => {
      this.setState({ username: event.target.value });
    }

    this.setPassword = (event) => {
      this.setState({ password: event.target.value });
    }

    this.validationLogin = () => {
      let usernameError = "";
      let passwordError = "";

      if (!this.state.username) {
        usernameError = "Usuário Obrigatório";
      }

      if (!this.state.password) {
        passwordError = "Senha Obrigatória";
      }

      if (usernameError || passwordError) {
        this.setState({ usernameError, passwordError });
        return false;
      }
      return true;
    };

    this.handleSubmit = event => {
      event.preventDefault();
      const isValid = this.validationLogin();
      if (isValid) {
        this.setState(this.state);
        var objSend = { username: this.state.username, password: this.state.password };

        fetch(EWALLY_API, {
          method: 'POST',
          body: JSON.stringify(objSend),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(res => res.json())
          .then(json => {
            if (json.token) {
              this.setState({ token: json.token });
              localStorage.setItem('TOKEN', json.token)
              window.location = "/extrato";
            }
            alert(json.msg);
          });
      }
    }
  }

  componentDidMount() {
    localStorage.clear('TOKEN')
  }

  render() {
    return (   
      
      <div className="login">  
        
        <div className="container_login">
          <div className="logo" >
            <img src={logo} alt="eWally" width="90px" />
            <h3>A conta digital Feita pra você</h3>
          </div>
          <form className="form-group col-md-4 mx-auto" onSubmit={this.handleSubmit} method="post" >
            <input type="text" name="username" id="username" placeholder="Usuário:" value={this.state.username} className="form-control" onChange={this.setUserName} />
            <div className="errorBox">
              {this.state.usernameError}
            </div>
            <input type="password" name="password" id="password" placeholder="Senha:" value={this.state.password} className="form-control" onChange={this.setPassword} />
            <div className="errorBox">
              {this.state.passwordError}
            </div>
            <div>
              <button type="submit" className="btn btn-primary col-md-12">Entrar</button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
};