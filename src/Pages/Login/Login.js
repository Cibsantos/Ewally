import React, { Component } from 'react';

import './login.css';
import logo from '../../Assets/images/logo-ewally.png';


export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="logo" >
            <img src={logo} alt="eWally" width= "90px" />
            <h3>A conta digital Feita pra você</h3>
          </div>         
          <form className="form-group col-md-4 mx-auto" >
            <input type="text" name="username" id="username" placeholder="Usuário:" className="form-control"  />
            <div className="errorBox">
             
            </div>
            <input type="password" name="password" id="password" placeholder="Senha"  className="form-control" />
            <div className="errorBox">
           
            </div>
            <div>
              <button type="submit" className="btn btn-primary col-md-12">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};