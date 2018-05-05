import {  FETCH_EXPENSES_SUCCEED, 
          FETCH_EXPENSES_FAILED } from '../../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_EXPENSES_SUCCEED:
    return action.expenses;
  case FETCH_EXPENSES_FAILED:
    return action.message;
  default:
    return state;
  }
}
