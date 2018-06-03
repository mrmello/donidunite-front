import types from '../../../actions/types';

const initialState = {
  showBar: false,
  color: 'secondary',
  message: 'Sucesso!'
}
export default function(state = initialState, action) {
  switch(action.type){
  case types.OPERATION_FAILED:
    return {
      showBar: true,
      color: 'primary',
      message: 'Ops! Não foi possível realizar esta ação'
    }
  case types.OPERATION_SUCCEEDED:
    return {
      ...state,
      showBar: true
    }
  case types.HIDE_FEEDBACK:
    return initialState
  default:
    return state;
  }
}
