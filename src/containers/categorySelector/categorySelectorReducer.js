import types  from '../../actions/types';
import { categoryCreator } from '../../actions/submitters';

const initialState = {
  categories: {},
  selectedCategory: {},
  onSubmit: categoryCreator,
}
export default function(state = initialState, action) {
  switch(action.type){
  case types.FETCH_CATEGORIES_SUCCEED:
  return {
    ...state,
    categories: action.categories
  }
  case types.EDIT_INCOME:
    return {
      ...state,
      selectedCategory: action.payload
    }
  default:
    return state;
  }
}
