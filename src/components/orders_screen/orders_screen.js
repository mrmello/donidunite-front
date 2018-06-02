import React from 'react';
import Orders from '../../containers/orders/orders';
import Includer from '../includer/includer';
import './orders_screen.css';

const OrdersScreen = () => {
  return (
    <div className="orders">
      <Orders />
      <Includer />
    </div>
  );
}

export { OrdersScreen };