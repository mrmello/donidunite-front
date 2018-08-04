import types from '../../actions/types';
import { productCreator, productEditor } from '../../actions/submitters'

const initialState = {
  products: {},
  selectedProduct: {},
  onSubmit: productCreator,
}
export default function(state = initialState, action) {
  switch(action.type){
    case types.FETCH_PRODUCTS_SUCCEED:
      return {
        ...state,
        products: action.products
      }
    case types.EDIT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
        onSubmit: productEditor
      }
    case types.CLEAR_PRODUCT_FORM:
      return {
        ...state,
        selectedProduct: initialState.selectedProduct,
        onSubmit: initialState.onSubmit
      }
    default:
      return state;
  }
}
