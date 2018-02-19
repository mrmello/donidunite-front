import React, { Component } from 'react';
import Orders from '../../containers/orders/Orders';
import Header from '../header/Header';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Orders />
      </div>
    );
  }
}
