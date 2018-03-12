import React, { Component } from 'react';
import Header from '../header/Header';
import Includer from '../includer/includer';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Includer />
      </div>
    );
  }
}
