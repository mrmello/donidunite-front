import types from '../../actions/types';
import { expenseCreator, expenseEditor } from '../../actions/submitters'

const initialState = {
  expenses: {},
  selectedExpense: {},
  onSubmit: expenseCreator,
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
        selectedExpense: action.payload,
        onSubmit: expenseEditor
      }
    case types.CLEAR_EXPENSE_FORM:
      return {
        ...state,
        selectedExpense: initialState.selectedExpense,
        onSubmit: initialState.onSubmit
      }
    default:
      return state;
  }
}
