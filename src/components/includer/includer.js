import React, { Component } from 'react';
import { Button, Popup, Grid } from 'semantic-ui-react'
import IncluderProduct from './components/includer-product/includer-product'
import IncluderOrder from './components/includer-order/includer-order'
import IncluderIncome from './components/includer-income/includer-income'
import IncluderExpense from './components/includer-expense/includer-expense'
import './includer.css';

export default class Includer extends Component {

  constructor() {
    super();
    this.state = {
        includerProductIsOpen: false,
        includerOrderIsOpen: false,
        includerIncomeIsOpen: false,
        includerExpenseIsOpen: false,
    };
    this.handleChangeIncluderProduct = this.handleChangeIncluderProduct.bind(this)
    this.handleChangeIncluderOrder = this.handleChangeIncluderOrder.bind(this)
    this.handleChangeIncluderIncome = this.handleChangeIncluderIncome.bind(this)
    this.handleChangeIncluderExpense = this.handleChangeIncluderExpense.bind(this)
  }
  
  handleChangeIncluderProduct() {
    this.setState({
      includerProductIsOpen: !this.state.includerProductIsOpen
    });
  }

  handleChangeIncluderOrder() {
    this.setState({
      includerOrderIsOpen: !this.state.includerOrderIsOpen
    });
  }

  handleChangeIncluderIncome() {
    this.setState({
      includerIncomeIsOpen: !this.state.includerIncomeIsOpen
    });
  }

  handleChangeIncluderExpense() {
    this.setState({
      includerExpenseIsOpen: !this.state.includerExpenseIsOpen
    });
  }
  render() {
    return (
      <div className="includer">
        <Popup
          trigger={<Button icon='add' />}
          position='left center'
          flowing
          hoverable
        >
          <Grid divided='vertically'>
            <Grid.Row>
              <label className="includer-item" aria-current="false" onClick={() => this.handleChangeIncluderOrder()}>Novo Pedido</label>
            </Grid.Row>
            <Grid.Row>
              <label className="includer-item" aria-current="false" onClick={() => this.handleChangeIncluderProduct()}>Novo Produto</label>
            </Grid.Row>
            <Grid.Row>
              <label className="includer-item" aria-current="false" onClick={() => this.handleChangeIncluderExpense()}>Nova Despesa</label>
            </Grid.Row>
            <Grid.Row>
              <label className="includer-item" aria-current="false" onClick={() => this.handleChangeIncluderIncome()}>Nova Entrada</label>
            </Grid.Row>
          </Grid>
        </Popup>
        <IncluderProduct isOpen={this.state.includerProductIsOpen} closeIncluderProduct={this.handleChangeIncluderProduct}/>
        <IncluderOrder isOpen={this.state.includerOrderIsOpen} closeIncluderOrder={this.handleChangeIncluderOrder}/>
        <IncluderIncome isOpen={this.state.includerIncomeIsOpen} closeIncluderIncome={this.handleChangeIncluderIncome}/>
        <IncluderExpense isOpen={this.state.includerExpenseIsOpen} closeIncluderExpense={this.handleChangeIncluderExpense}/>
      </div>
    )
  }
}
