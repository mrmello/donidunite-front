import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'

function* fetchOrders() {
   try {
      const response = yield call(Api.fetchOrders);
      yield put({type: types.FETCH_ORDERS_SUCCEED, orders: response.data});
   } catch (e) {
      yield put({type: types.FETCH_ORDERS_FAILED, message: e.message});
   }
}

function* watcherOrdersSaga() {
  yield takeLatest(types.FETCH_ORDERS_REQUESTED, fetchOrders);
}

export default watcherOrdersSaga;