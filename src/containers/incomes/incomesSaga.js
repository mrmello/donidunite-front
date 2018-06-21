import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'
import { fetchIncomes as refreshIncomes } from './incomesActions'
import {
  toggleIncomeIncluder
} from '../../components/includer/includerActions'
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
    yield put(refreshIncomes())
    yield put(toggleIncomeIncluder())
    yield put(showSuccessFeedback())
  } catch (e) {
    yield put(showFailureFeedback())
  }
}

function* deleteIncome(action) {
  try {
    yield call(Api.deleteIncome, action.payload);
    yield put(refreshIncomes())
    yield put(showSuccessFeedback())
  } catch (e) {
    yield put(showFailureFeedback())
  }
}

function* editIncome() {
  yield put(toggleIncomeIncluder());
}

function* submitEditIncome(action) {
  try {
    yield call(Api.editIncome, action.payload);
    yield put(refreshIncomes())
    yield put(toggleIncomeIncluder())
    yield put(showSuccessFeedback())
  } catch (_) {
    yield put(showFailureFeedback())
  }
}

function* watcherIncomesSaga() {
  yield takeLatest(types.FETCH_INCOMES_REQUESTED, fetchIncomes);
  yield takeEvery(types.CREATE_INCOMES_REQUESTED, createIncome);
  yield takeLatest(types.DELETE_INCOME_REQUESTED, deleteIncome);
  yield takeLatest(types.EDIT_INCOME_REQUESTED, submitEditIncome);
  yield takeLatest(types.EDIT_INCOME, editIncome);
}

export default watcherIncomesSaga;