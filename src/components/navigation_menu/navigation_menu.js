import React from 'react';
import './navigation_menu.css';
import Menu from './components/menu/Menu';
import MenuMobile from './components/menu-mobile/MenuMobile';

const NavigationMenu = () => {
  return (
    <div className="navigation_menu">
      <Menu />
      <MenuMobile />
    </div>
  )
}

export default NavigationMenu;
