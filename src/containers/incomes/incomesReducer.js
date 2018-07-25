import types from '../../actions/types'
import { incomeCreator, incomeEditor } from '../../actions/submitters'

const initialState = {
  incomes: {},
  selectedIncome: {},
  onSubmit: incomeCreator,
}

export default function(state = initialState, action) {
  switch(action.type){
  case types.FETCH_INCOMES_SUCCEED:
    return {
      ...state,
      incomes: action.incomes
    }
  case types.EDIT_INCOME:
    return {
      ...state,
      selectedIncome: action.payload,
      onSubmit: incomeEditor
    }
  case types.CLEAR_INCOME_FORM:
    return {
      ...state,
      selectedIncome: initialState.selectedIncome,
      onSubmit: initialState.onSubmit
    }
  default:
    return state;
  }
}
