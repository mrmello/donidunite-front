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
    yield put({type: types.CREATE_PRODUCT_SUCCEEDED});
    yield put(refreshProducts())
    yield put(toggleProductIncluder())
    yield put(showSuccessFeedback())
  } catch (e) {
    console.log(e)
    yield put(showFailureFeedback())
  }
}

function* watcherProductsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS_REQUESTED, fetchProducts);
  yield takeLatest(types.CREATE_PRODUCT_REQUESTED, createProduct);
}

export default watcherProductsSaga;