import React, { Component } from 'react';
import Header from '../header/Header';
import Expenses from '../../containers/expenses/expenses';
import Incomes from '../../containers/incomes/incomes';

export default class FinancialScreen extends Component {
  render() {
    return (
      <div className="financial">
        <Header />
        <Expenses />
        <Incomes />
      </div>
    );
  }
}
