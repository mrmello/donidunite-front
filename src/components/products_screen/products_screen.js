import React, { Component } from 'react';
import Products from '../../containers/products/products';
import Includer from '../includer/includer';

export default class ProductsScreen extends Component {
  render() {
    return (
      <div className="products">
        <Products />
        <Includer />
      </div>
    );
  }
}
