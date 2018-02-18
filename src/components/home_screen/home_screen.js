import React, { Component } from 'react';
import './Home_screen.css';
import Header from '../header/Header';
import Orders from '../../containers/orders/Orders';

export default class Home_screen extends Component {
  render() {
    return (
      <div className="home_screen">
        <Header />
        <Orders />
      </div>
    );
  }
}
