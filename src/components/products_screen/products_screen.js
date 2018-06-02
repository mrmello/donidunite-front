import React from 'react';
import Products from '../../containers/products/products';
import Includer from '../includer/includer';
import './products_screen.css';

const ProductsScreen = () => {
  return (
    <div className="products">
      <Products />
      <Includer />
    </div>
  );
}

export { ProductsScreen };