import { FETCH_PRODUCTS }        from '../actions/types';
import { FETCH_PRODUCTS_ERROR }  from '../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_PRODUCTS:
    return action.payload;
  case FETCH_PRODUCTS_ERROR:
    console.log(action.payload);
    return action.payload;
  default:
    return state;
  }
}
