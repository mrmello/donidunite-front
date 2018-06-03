import types from '../../actions/types';

export const fetchCategories = () => ({
  type: types.FETCH_CATEGORIES_REQUESTED,
})

export const createCategory = (values) => ({
  type: types.CREATE_CATEGORY_REQUESTED,
  payload: values
})