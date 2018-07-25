import types from '../../actions/types';

export const fetchIncomes = () => ({
  type: types.FETCH_INCOMES_REQUESTED
})

export const createIncome = (values) => ({
  type: types.CREATE_INCOMES_REQUESTED,
  payload: values
})

export const deleteIncome = (id) => ({
  type: types.DELETE_INCOME_REQUESTED,
  payload: id
})

export const editIncome = (expense) => ({
  type: types.EDIT_INCOME,
  payload: expense
})

export const submitEditIncome = (values) => ({
  type: types.EDIT_INCOME_REQUESTED,
  payload: values
})

export const clearIncomeForm = () => ({
  type: types.CLEAR_INCOME_FORM
})