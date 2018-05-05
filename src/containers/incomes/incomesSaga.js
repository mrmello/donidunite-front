import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'

function* fetchIncomes() {
   try {
      const response = yield call(Api.fetchIncomes);
      yield put({type: types.FETCH_INCOMES_SUCCEED, incomes: response.data});
   } catch (e) {
      yield put({type: types.FETCH_INCOMES_FAILED, message: e.message});
   }
}

function* watcherIncomesSaga() {
  yield takeLatest(types.FETCH_INCOMES_REQUESTED, fetchIncomes);
}

export default watcherIncomesSaga;