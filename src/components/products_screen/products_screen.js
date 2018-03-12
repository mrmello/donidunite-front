import React, { Component } from 'react';
import Header from '../header/Header';
import Products from '../../containers/products/products';
import Includer from '../includer/includer';

export default class ProductsScreen extends Component {
  render() {
    return (
      <div className="products">
        <Header />
        <Products />
        <Includer />
      </div>
    );
  }
}
