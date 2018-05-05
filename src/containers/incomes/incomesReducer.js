import {  FETCH_INCOMES_SUCCEED,
          FETCH_INCOMES_FAILED } from '../../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_INCOMES_SUCCEED:
    return action.incomes;
  case FETCH_INCOMES_FAILED:
    return action.message;
  default:
    return state;
  }
}
