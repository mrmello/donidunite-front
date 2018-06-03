import types from '../../actions/types';

export const fetchExpenses = () => ({
  type: types.FETCH_EXPENSES_REQUESTED
})

export const createExpense = (values) => ({
  type: types.CREATE_EXPENSE_REQUESTED,
  payload: values
})