import React, { Component } from 'react';
import Header from '../header/Header';
import Includer from '../includer/includer';

export default class ReportsScreen extends Component {
  render() {
    return (
      <div className="reports">
        <Header />
        <Includer />
      </div>
    );
  }
}
