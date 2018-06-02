import types from '../../actions/types';

export const fetchCategories = () => ({
  type: types.FETCH_CATEGORIES_REQUESTED,
})

export const saveCategory = (values) => ({
  type: types.SAVE_CATEGORY_REQUESTED,
  payload: values
})