import React from 'react'
import './MenuMobile.css';

const MenuMobile = () => {
  return (
    <div className="menu-mobile">
      <div className="header-fixed">
        <i className="sidebar icon"/>
      </div>
      <div className="ui inverted vertical menu">
        <a className="item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
      </div>
    </div>
  )
}

export default MenuMobile;