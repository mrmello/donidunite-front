import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="ui pink buttons">
          <Link className="ui button" to="/home">Início</Link>
          <button className="ui button">Catálogo</button>
          <button className="ui button">Pedidos</button>
          <Link className="ui button" to="/expenses">Despesas</Link>
          <button className="ui button">Relatórios</button>
        </div>
      </div>
    )
  }
}
