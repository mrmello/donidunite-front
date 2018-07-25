import types from '../../actions/types';

export const fetchCategories = () => ({
  type: types.FETCH_CATEGORIES_REQUESTED,
})

export const createCategory = (values) => ({
  type: types.CREATE_CATEGORY_REQUESTED,
  payload: values
})

export const deleteCategory = (id) => ({
  type: types.DELETE_CATEGORY_REQUESTED,
  payload: id
})

export const editCategory = (category) => ({
  type: types.EDIT_CATEGORY,
  payload: category
})