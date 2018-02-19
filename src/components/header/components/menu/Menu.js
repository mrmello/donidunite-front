import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="ui pink buttons">
          <NavLink exact={true} activeClassName="active" className="ui button" to="/">Início</NavLink>
          <NavLink activeClassName="active" className="ui button" to="/products">Catálogo</NavLink>
          <NavLink activeClassName="active" className="ui button" to="/orders">Pedidos</NavLink>
          <NavLink activeClassName="active" className="ui button" to="/financial">Caixa</NavLink>
          <NavLink activeClassName="active" className="ui button" to="/reports">Relatórios</NavLink>
        </div>
      </div>
    )
  }
}
