import axios from 'axios';
import types from './types';

export function fetchSales() {
  const request = axios.get('https://donidunite-back.herokuapp.com/management/orders');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: types.FETCH_SALES,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: types.FETCH_SALES_ERROR,
        payload: err
      });
    })
  };
}

export function fetchProducts() {
  const request = axios.get('https://donidunite-back.herokuapp.com/catalog/products');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: types.FETCH_PRODUCTS_ERROR,
        payload: err
      });
    })
  };
}

export function fetchExpenses() {
  const request = axios.get('https://donidunite-back.herokuapp.com/management/expenses');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: types.FETCH_EXPENSES,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: types.FETCH_EXPENSES_ERROR,
        payload: err
      });
    })
  };
}

export function fetchIncomes() {
  const request = axios.get('https://donidunite-back.herokuapp.com/management/incomes');

  return dispatch => {
    request.then(response => {
      dispatch({
        type: types.FETCH_INCOMES,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: types.FETCH_INCOMES_ERROR,
        payload: err
      });
    })
  };
}

export function fetchCategories(type) {
  const request = axios.get(`https://donidunite-back.herokuapp.com/category/bytype/${type}`);

  return dispatch => {
    request.then(response => {
      dispatch({
        type: types.FETCH_CATEGORIES,
        payload: response.data
      });
    }).catch(err => {
      dispatch({
        type: types.FETCH_CATEGORIES_ERROR,
        payload: err
      });
    })
  };
}
