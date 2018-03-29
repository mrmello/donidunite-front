import { FETCH_INCOMES }        from '../actions/types';
import { FETCH_INCOMES_ERROR }  from '../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_INCOMES:
    return action.payload;
  case FETCH_INCOMES_ERROR:
    return action.payload;
  default:
    return state;
  }
}
