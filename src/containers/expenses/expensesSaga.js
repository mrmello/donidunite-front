import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'

function* fetchExpenses() {
   try {
      const response = yield call(Api.fetchExpenses);
      yield put({type: types.FETCH_EXPENSES_SUCCEED, expenses: response.data});
   } catch (e) {
      yield put({type: types.FETCH_EXPENSES_FAILED, message: e.message});
   }
}

function* watcherExpensesSaga() {
  yield takeLatest(types.FETCH_EXPENSES_REQUESTED, fetchExpenses);
}

export default watcherExpensesSaga;