import React, { Component } from 'react';
import Expenses from '../../containers/expenses/expenses';
import Incomes from '../../containers/incomes/incomes';
import Includer from '../includer/includer';
import './financial_screen.css';

const FinancialScreen = () => {
  return (
    <div className="financial">
      <Expenses />
      <Incomes />
      <Includer />
    </div>
  );
}

export default FinancialScreen;