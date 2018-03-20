import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class MenuClass extends Component {
  state = { activeItem: 'Início' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu vertical tabular color='pink'>
          <NavLink exact={true} to="/">
            <Menu.Item name='Início' active={activeItem === 'Início'} onClick={this.handleItemClick}/>
          </NavLink>
          <NavLink to="/products">
            <Menu.Item name='Catálogo' active={activeItem === 'Catálogo'} onClick={this.handleItemClick}/>
          </NavLink>
          <NavLink to="/orders">
            <Menu.Item name='Pedidos' active={activeItem === 'Pedidos'} onClick={this.handleItemClick}/>
          </NavLink>
          <NavLink to="/financial">
            <Menu.Item name='Caixa' active={activeItem === 'Caixa'} onClick={this.handleItemClick}/>
          </NavLink>
          <NavLink to="/reports">
            <Menu.Item name='Relatórios' active={activeItem === 'Relatórios'} onClick={this.handleItemClick}/>
          </NavLink>
        </Menu>
      </div>
    )
  }
}
