import React, { Component } from 'react';
import Header from '../header/Header';
import Orders from '../../containers/orders/Orders';
import Includer from '../includer/includer';

export default class OrdersScreen extends Component {
  render() {
    return (
      <div className="orders">
        <Header />
        <Orders />
        <Includer />
      </div>
    );
  }
}
