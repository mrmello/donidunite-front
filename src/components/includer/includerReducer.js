import types from '../../actions/types';

const initialState = {
  includerCategoryIsOpen: false,
  includerProductIsOpen: false,
  includerIncomeIsOpen: false,
  includerExpenseIsOpen: false,
}
export default function(state = initialState, action) {
  switch(action.type){
  case types.TOGGLE_CATEGORY_INCLUDER:
    return {
      ...state,
      includerCategoryIsOpen: !state.includerCategoryIsOpen
    }
  case types.TOGGLE_EXPENSE_INCLUDER:
    return {
      ...state,
      includerExpenseIsOpen: !state.includerExpenseIsOpen
    }
  case types.TOGGLE_INCOME_INCLUDER:
    return {
      ...state,
      includerIncomeIsOpen: !state.includerIncomeIsOpen
    }
  case types.TOGGLE_PRODUCTS_INCLUDER:
    return {
      ...state,
      includerProductIsOpen: !state.includerProductIsOpen
    }
  default:
    return state;
  }
}
