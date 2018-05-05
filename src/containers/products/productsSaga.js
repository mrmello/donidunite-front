import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'

function* fetchProducts(action) {
   try {
      const products = yield call(Api.fetchProducts);
      yield put({type: types.FETCH_PRODUCTS_SUCCEED, products: products.data});
   } catch (e) {
      yield put({type: types.FETCH_PRODUCTS_FAILED, message: e.message});
   }
}

function* watcherProductsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS_REQUESTED, fetchProducts);
}

export default watcherProductsSaga;