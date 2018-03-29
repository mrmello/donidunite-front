import { FETCH_EXPENSES }        from '../actions/types';
import { FETCH_EXPENSES_ERROR }  from '../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_EXPENSES:
    return action.payload;
  case FETCH_EXPENSES_ERROR:
    return action.payload;
  default:
    return state;
  }
}
