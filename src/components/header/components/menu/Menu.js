import React, { Component } from 'react'
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="ui pink buttons">
          <button className="ui button">Início</button>
          <button className="ui button">Catálogo</button>
          <button className="ui button">Pedidos</button>
          <button className="ui button">Despesas</button>
          <button className="ui button">Relatórios</button>
        </div>
      </div>
    )
  }
}
