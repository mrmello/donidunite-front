import types from '../../actions/types';

export const fetchIncomes = () => ({
  type: types.FETCH_INCOMES_REQUESTED
})

export const createIncome = (values) => ({
  type: types.CREATE_INCOMES_REQUESTED,
  payload: values
})