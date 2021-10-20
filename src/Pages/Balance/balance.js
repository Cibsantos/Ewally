import React, { Component } from 'react';

import './balance.css';

import logo from '../../Assets/images/logo-ewally.png';

export default class Balance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saldo: '',
      dataInicial: '',
      dataFinal: '',
      statementItems: []
    }

    this.changeDataInicial = (event) => {
      this.setState({ dataInicial: event.target.value });
    }

    this.changeDataFinal = (event) => {
      this.setState({ dataFinal: event.target.value });
    }

  }

  componentDidMount() {
    const EWALLY_API = 'https://apidev.ewally.com.br/account/balance';

    fetch(EWALLY_API, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('TOKEN') }
    })
      .then(res => res.json())
      .then(json => {
        if (json.balance) {
          this.setState({ saldo: json.balance / 100 });
        } else {
          alert(json.msg);
          window.location = "/";
        }
      })
  }

  consultarStatement() {
    if (this.state.dataInicial && this.state.dataFinal) {
      let EWALLY_API = 'https://apidev.ewally.com.br/b2b/statement?initialDate=' + this.state.dataInicial + '&finalDate=' + this.state.dataFinal;

      fetch(EWALLY_API, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('TOKEN') }
      })
        .then(res => res.json())
        .then(json => {
          if (json.statement) {
            this.setState({ statementItems: json.statement });
          } else {
            alert(json.msg);
            window.location = "/";
          }
        })
    }
  }

  render() {
    return (

      <div className="container_balance">
        <div className="col-md-8 mx-auto text-extrato">
          <h3>Olá, seja bem-vindo(a)!</h3>
          <p>Um banco feito para todos, uma conta feita para você !</p>
        </div>
        <div class="balance">
          <div class="balance_content_value" >
            <h2>Saldo:</h2>
            <h3>R$ {this.state.saldo}</h3>
          </div>
          <div class="vl"></div>

          <div>
            <form class="balance_content_date">
              <div>
                <label htmlFor="de_data">De:  </label>
                <input type="date" className="form-control" id="de_data" value={this.state.dataInicial} onChange={this.changeDataInicial} />
              </div>
              <div>
                <label htmlFor="ate_data" className="mr-2">Até:  </label>
                <input type="date" className="form-control" id="ate_data" value={this.state.dataFinal} onChange={this.changeDataFinal} />
              </div>
              <button type="button" onClick={() => this.consultarStatement()} className="btn btn-primary ">Pesquisar</button>
            </form>

          </div>
        </div>
        <div className="col-md-9 align-items-center justify-content-center">
          <table class="table_balance">
            <tbody>
              {this.state.statementItems.map(function (item, index) {
                var data = new Date(item.createdAt);
                var operation = (item.operationType).replace("_", " ");
                return (
                  <tr>
                    <th scope="row" key={index}>{data.toLocaleDateString()}</th>
                    <td>{operation}</td>
                    <td >R$ {(item.amount / 100).toFixed(2)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}