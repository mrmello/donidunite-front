import types from '../../actions/types';

export const fetchIncomes = () => ({
  type: types.FETCH_INCOMES_REQUESTED
})

export const saveIncome = (values) => ({
  type: types.SAVE_INCOMES_REQUESTED,
  payload: values
})