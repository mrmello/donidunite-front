import {  FETCH_PRODUCTS_SUCCEED,
          FETCH_PRODUCTS_FAILED }  from '../../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_PRODUCTS_SUCCEED:
    return action.products;
  case FETCH_PRODUCTS_FAILED:
    return action.message;
  default:
    return state;
  }
}
