import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'
import { fetchProducts as refreshProducts } from './productsActions'
import {
  toggleProductIncluder
} from '../../components/includer/includerActions'
import {
  showSuccessFeedback,
  showFailureFeedback
} from '../../components/commons/notification/notificationBarActions'

function* fetchProducts(action) {
   try {
      const products = yield call(Api.fetchProducts);
      yield put({type: types.FETCH_PRODUCTS_SUCCEED, products: products.data});
   } catch (e) {
      yield put({type: types.FETCH_PRODUCTS_FAILED, message: e.message});
   }
}

function* createProduct(action) {
  try {
    yield call(Api.createProduct, action.payload);
    yield put(refreshProducts())
    yield put(toggleProductIncluder())
    yield put(showSuccessFeedback())
  } catch (e) {
    yield put(showFailureFeedback())
  }
}

function* deleteProduct(action) {
  try {
    yield call(Api.deleteProduct, action.payload);
    yield put(refreshProducts())
    yield put(showSuccessFeedback())
  } catch (e) {
    yield put(showFailureFeedback())
  }
}

function* editProduct() {
  yield put(toggleProductIncluder());
}

function* submitEditProduct(action) {
  try {
    yield call(Api.editProduct, action.payload);
    yield put(refreshProducts())
    yield put(toggleProductIncluder())
    yield put(showSuccessFeedback())
  } catch (_) {
    yield put(showFailureFeedback())
  }
}

function* watcherProductsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS_REQUESTED, fetchProducts);
  yield takeLatest(types.CREATE_PRODUCT_REQUESTED, createProduct);
  yield takeLatest(types.DELETE_PRODUCT_REQUESTED, deleteProduct);
  yield takeLatest(types.EDIT_PRODUCT, editProduct);
  yield takeLatest(types.SUBMIT_EDIT_PRODUCT, submitEditProduct);
}

export default watcherProductsSaga;