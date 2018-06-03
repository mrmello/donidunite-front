import types from '../../actions/types'

const initialState = {
  includerIncomeIsOpen: false
}

export default function(state = initialState, action) {
  switch(action.type){
  case types.FETCH_INCOMES_SUCCEED:
    return action.incomes;
  case types.FETCH_INCOMES_FAILED:
    return action.message;
  case types.CREATE_INCOMES_SUCCEED:
    return {
      ...state
    }
  default:
    return state;
  }
}
