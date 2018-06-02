import {  FETCH_CATEGORIES_SUCCEED,
          FETCH_CATEGORIES_FAILED }  from '../../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_CATEGORIES_SUCCEED:
    return action.categories;
  case FETCH_CATEGORIES_FAILED:
    return action.message;
  default:
    return state;
  }
}
