import {  FETCH_CATEGORIES_BY_TYPE_SUCCEED,  
          FETCH_CATEGORIES_BY_TYPE_FAILED }  from '../../actions/types';

export default function(state = [], action) {
  switch(action.type){
  case FETCH_CATEGORIES_BY_TYPE_SUCCEED:
    return action.categories;
  case FETCH_CATEGORIES_BY_TYPE_FAILED:
    return action.message;
  default:
    return state;
  }
}
