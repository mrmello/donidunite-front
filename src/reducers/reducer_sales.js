import { FETCH_SALES }        from '../actions/types';
import { FETCH_SALES_ERROR }  from '../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_SALES:
    return action.payload;
  case FETCH_SALES_ERROR:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
}
