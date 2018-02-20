import React, { Component } from 'react';
import Orders from '../../containers/orders/Orders';
import Header from '../header/Header';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Orders />
      </div>
    );
  }
}
