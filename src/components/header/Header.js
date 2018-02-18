import React, { Component } from 'react';
import './Header.css';
import Menu from './components/menu/Menu';
import MenuMobile from './components/menu-mobile/MenuMobile';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Menu />
        <MenuMobile />
      </div>
    )
  }
}
