import React, { Component } from 'react';
import './navigation_menu.css';
import Menu from './components/menu/Menu';
import MenuMobile from './components/menu-mobile/MenuMobile';

export default class NavigationMenu extends Component {
  render() {
    return (
      <div className="navigation_menu">
        <Menu />
        <MenuMobile />
      </div>
    )
  }
}
