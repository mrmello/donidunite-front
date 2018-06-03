import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'
import {
  showSuccessFeedback,
  showFailureFeedback
} from '../../components/commons/notification/notificationBarActions'

function* fetchIncomes() {
   try {
      const response = yield call(Api.fetchIncomes);
      yield put({type: types.FETCH_INCOMES_SUCCEED, incomes: response.data});
   } catch (e) {
      yield put({type: types.FETCH_INCOMES_FAILED, message: e.message});
   }
}

function* createIncome(action) {
  try {
    yield call(Api.createIncome, action.payload);
    yield put({type: types.CREATE_INCOMES_SUCCEED});
    yield put(showSuccessFeedback())
  } catch (e) {
    yield put(showFailureFeedback())
  }
}

function* watcherIncomesSaga() {
  yield takeLatest(types.FETCH_INCOMES_REQUESTED, fetchIncomes);
  yield takeEvery(types.CREATE_INCOMES_REQUESTED, createIncome);
}

export default watcherIncomesSaga;