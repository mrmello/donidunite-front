import types from '../../actions/types';

export const toggleCategoryIncluder = () => ({
  type: types.TOGGLE_CATEGORY_INCLUDER,
})

export const toggleExpenseIncluder = () => ({
  type: types.TOGGLE_EXPENSE_INCLUDER,
})

export const toggleIncomeIncluder = () => ({
  type: types.TOGGLE_INCOME_INCLUDER,
})

export const toggleProductIncluder = () => ({
  type: types.TOGGLE_PRODUCTS_INCLUDER,
})
