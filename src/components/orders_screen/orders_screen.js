import React, { Component } from 'react';
import Orders from '../../containers/orders/Orders';
import Includer from '../includer/includer';
import './orders_screen.css';

export default class OrdersScreen extends Component {
  render() {
    return (
      <div className="orders">
        <Orders />
        <Includer />
      </div>
    );
  }
}
