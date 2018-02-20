import axios                  from 'axios';
import {FETCH_SALES,
        FETCH_SALES_ERROR,
        FETCH_PRODUCTS,
        FETCH_PRODUCTS_ERROR } from './types';

export function fetchSales() {
  const request = axios.get('http://localhost:3100/catalog/products');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: FETCH_SALES,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: FETCH_SALES_ERROR,
        payload: err
      });
    })
  };
}

export function fetchProducts() {
  const request = axios.get('http://localhost:3100/catalog/products');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: err
      });
    })
  };
}
