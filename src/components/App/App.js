import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Orders from '../orders/Orders';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Orders />
      </div>
    );
  }
}
