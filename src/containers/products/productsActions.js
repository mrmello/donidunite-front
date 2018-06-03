import types from '../../actions/types';

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUESTED
})

export const createProduct = (values) => ({
  type: types.CREATE_PRODUCT_REQUESTED,
  payload: values
})