import types from '../../actions/types';

export const fetchCategoriesByType = (categoryType) => ({
  type: types.FETCH_CATEGORIES_BY_TYPE_REQUESTED,
  payload: categoryType
})