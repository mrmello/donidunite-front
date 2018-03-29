import { FETCH_CATEGORIES }        from '../actions/types';
import { FETCH_CATEGORIES__ERROR }  from '../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_CATEGORIES:
    return action.payload;
  case FETCH_CATEGORIES__ERROR:
    return action.payload;
  default:
    return state;
  }
}
