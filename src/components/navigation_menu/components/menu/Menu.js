import React from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import './Menu.css';

const MenuClass = () => {
  return (
    <div>
      <Menu vertical tabular color='pink'>
        <Menu.Item name='Início'      as={NavLink} to="/" exact={true} />
        <Menu.Item name='Catálogo'    as={NavLink} to="/products"/>
        <Menu.Item name='Pedidos'     as={NavLink} to="/orders"/>
        <Menu.Item name='Caixa'       as={NavLink} to="/financial"/>
        <Menu.Item name='Relatórios'  as={NavLink} to="/reports"/>
      </Menu>
    </div>
  )
}

export default MenuClass;