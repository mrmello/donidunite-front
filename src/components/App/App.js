import React, { Component } from 'react';
import './App.css';
import Menu from '../menu/Menu';
import Orders from '../orders/Orders';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Orders />
      </div>
    );
  }
}
