import types from '../../actions/types';

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUESTED
})

export const createProduct = (values) => ({
  type: types.CREATE_PRODUCT_REQUESTED,
  payload: values
})

export const deleteProduct = (id) => ({
  type: types.DELETE_PRODUCT_REQUESTED,
  payload: id
})

export const editProduct = (product) => ({
  type: types.EDIT_PRODUCT,
  payload: product
})

export const submitEditProduct = (values) => ({
  type: types.SUBMIT_EDIT_PRODUCT,
  payload: values
})

export const clearProductForm = () => ({
  type: types.CLEAR_PRODUCT_FORM
})