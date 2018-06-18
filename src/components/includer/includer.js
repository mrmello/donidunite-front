import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Popup, Grid }  from 'semantic-ui-react'
import { createIncome } from '../../containers/incomes/incomesActions'
import { createExpense } from '../../containers/expenses/expensesActions'
import { createProduct } from '../../containers/products/productsActions'
import {
  toggleCategoryIncluder,
  toggleExpenseIncluder,
  toggleIncomeIncluder,
  toggleProductIncluder
} from './includerActions'
import { fetchCategories, createCategory } from '../../containers/categorySelector/categorySelectorActions';
import Store from '../../store'
import IncluderProduct          from './components/includer-product/includer-product'
import IncluderOrder            from './components/includer-order/includer-order'
import IncluderIncome           from './components/includer-income/includer-income'
import IncluderExpense          from './components/includer-expense/includer-expense'
import IncluderCategory          from './components/includer-category/includer-category'
import './includer.css';

export class Includer extends Component {

  componentWillMount(){
    this.props.fetchCategories();
  }

  constructor() {
    super()
    this.handleChangeIncluderProduct = this.handleChangeIncluderProduct.bind(this)
    this.handleChangeIncluderOrder = this.handleChangeIncluderOrder.bind(this)
    this.handleChangeIncluderIncome = this.handleChangeIncluderIncome.bind(this)
    this.handleChangeIncluderExpense = this.handleChangeIncluderExpense.bind(this)
    this.handleChangeIncluderCategory = this.handleChangeIncluderCategory.bind(this)
  }

  handleChangeIncluderProduct() {
    Store.dispatch(toggleProductIncluder())
  }

  handleChangeIncluderOrder() {
  }

  handleChangeIncluderIncome() {
    Store.dispatch(toggleIncomeIncluder())
  }

  handleChangeIncluderExpense() {
    Store.dispatch(toggleExpenseIncluder())
  }

  handleChangeIncluderCategory() {
    Store.dispatch(toggleCategoryIncluder())
  }

  createIncome(formIncome) {
    Store.dispatch(createIncome(formIncome));
  }

  createCategory(formCategory) {
    Store.dispatch(createCategory(formCategory));
  }

  createExpense(formExpense) {
    Store.dispatch(createExpense(formExpense));
  }

  createProduct(formProduct) {
    Store.dispatch(createProduct(formProduct));
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
          <Grid divided='vertically' className="balon-box">
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
            <Grid.Row>
              <label className="includer-item" aria-current="false" onClick={() => this.handleChangeIncluderCategory()}>Nova Categoria</label>
            </Grid.Row>
          </Grid>
        </Popup>
        <IncluderProduct
          onSubmit={this.createProduct}
          isOpen={this.props.includerProductIsOpen}
          categories={this.props.categories}
          closeIncluderProduct={this.handleChangeIncluderProduct}
        />
        <IncluderOrder
          isOpen={false}
          closeIncluderOrder={this.handleChangeIncluderOrder}
        />
        <IncluderIncome
          onSubmit={this.createIncome}
          categories={this.props.categories}
          isOpen={this.props.includerIncomeIsOpen}
          closeIncluderIncome={this.handleChangeIncluderIncome}
        />
        <IncluderExpense
          onSubmit={this.createExpense}
          isOpen={this.props.includerExpenseIsOpen}
          categories={this.props.categories}
          closeIncluderExpense={this.handleChangeIncluderExpense}
        />
        <IncluderCategory
          onSubmit={this.createCategory}
          isOpen={this.props.includerCategoryIsOpen}
          categories={this.props.categories}
          closeIncluderCategory={this.handleChangeIncluderCategory}
        />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categories,
    includerCategoryIsOpen: state.includer.includerCategoryIsOpen,
    includerProductIsOpen: state.includer.includerProductIsOpen,
    includerIncomeIsOpen: state.includer.includerIncomeIsOpen,
    includerExpenseIsOpen: state.includer.includerExpenseIsOpen
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Includer);