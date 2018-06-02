import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
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

function* saveIncome(action) {
  try {
    yield call(Api.saveIncome, action.payload);
    yield put({type: types.SAVE_INCOMES_SUCCEED});
  } catch (e) {
     yield put({type: types.SAVE_INCOMES_FAILED});
  }
}

function* watcherIncomesSaga() {
  yield takeLatest(types.FETCH_INCOMES_REQUESTED, fetchIncomes);
  yield takeEvery(types.SAVE_INCOMES_REQUESTED, saveIncome);
}

export default watcherIncomesSaga;