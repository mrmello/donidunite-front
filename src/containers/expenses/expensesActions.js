import types from '../../actions/types';

export const fetchExpenses = () => ({
  type: types.FETCH_EXPENSES_REQUESTED
})

export const createExpense = (values) => ({
  type: types.CREATE_EXPENSE_REQUESTED,
  payload: values
})

export const deleteExpense = (id) => ({
  type: types.DELETE_EXPENSE_REQUESTED,
  payload: id
})

export const editExpense = (expense) => ({
  type: types.EDIT_EXPENSE,
  payload: expense
})

