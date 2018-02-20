import React, { Component } from 'react';
import Header from '../header/Header';
import Orders from '../../containers/orders/Orders';

export default class OrdersScreen extends Component {
  render() {
    return (
      <div className="orders">
        <Header />
        <Orders />
      </div>
    );
  }
}
