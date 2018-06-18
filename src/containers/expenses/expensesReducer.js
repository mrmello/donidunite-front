import types from '../../actions/types';

const initialState = {
  expenses: {},
  selectedExpense: {}
}

export default function(state = initialState, action) {
  switch(action.type){
  case types.FETCH_EXPENSES_SUCCEED:
    return {
      ...state,
      expenses: action.expenses
    }
  case types.EDIT_EXPENSE:
    return {
      ...state,
      selectedExpense: action.payload
    }
  default:
    return state;
  }
}
