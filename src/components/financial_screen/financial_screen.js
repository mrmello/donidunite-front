import React, { Component } from 'react';
import Expenses from '../../containers/expenses/expenses';
import Incomes from '../../containers/incomes/incomes';
import Includer from '../includer/includer';

export default class FinancialScreen extends Component {
  render() {
    return (
      <div className="financial">
        <Expenses />
        <Incomes />
        <Includer />
      </div>
    );
  }
}
