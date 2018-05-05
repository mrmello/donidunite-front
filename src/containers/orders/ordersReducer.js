import {  FETCH_ORDERS_SUCCEED,
          FETCH_ORDERS_FAILED } from '../../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_ORDERS_SUCCEED:
    return action.orders;
  case FETCH_ORDERS_FAILED:
    return action.message;
  default:
    return state;
  }
}
