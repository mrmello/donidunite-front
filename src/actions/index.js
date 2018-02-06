import axios                  from 'axios';
import { FETCH_SALES }        from './types';
import { FETCH_SALES_ERROR }  from './types';

export function fetchSales() {
  const request = axios.get('http://localhost:3100/products');

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
