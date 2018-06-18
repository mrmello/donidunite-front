import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'
import { fetchExpenses as refreshExpenses } from './expensesActions'
import {
  toggleExpenseIncluder
} from '../../components/includer/includerActions'
import {
  showSuccessFeedback,
  showFailureFeedback
} from '../../components/commons/notification/notificationBarActions'

function* fetchExpenses() {
   try {
      const response = yield call(Api.fetchExpenses);
      yield put({type: types.FETCH_EXPENSES_SUCCEED, expenses: response.data});
   } catch (e) {
      yield put({type: types.FETCH_EXPENSES_FAILED, message: e.message});
   }
}

function* createExpense(action) {
  try {
    yield call(Api.createExpense, action.payload);
    yield put({type: types.CREATE_EXPENSE_SUCCEEDED});
    yield put(refreshExpenses())
    yield put(toggleExpenseIncluder())
    yield put(showSuccessFeedback())
  } catch (_) {
    yield put(showFailureFeedback())
  }
}

function* deleteExpense(action) {
  try {
    yield call(Api.deleteExpense, action.payload);
    yield put(refreshExpenses())
    yield put(showSuccessFeedback())
  } catch (e) {
    console.log(e)
    yield put(showFailureFeedback())
  }
}

function* editExpense() {
  yield put(toggleExpenseIncluder());
}

function* watcherExpensesSaga() {
  yield takeLatest(types.FETCH_EXPENSES_REQUESTED, fetchExpenses);
  yield takeLatest(types.CREATE_EXPENSE_REQUESTED, createExpense);
  yield takeLatest(types.DELETE_EXPENSE_REQUESTED, deleteExpense);
  yield takeLatest(types.EDIT_EXPENSE, editExpense);
}

export default watcherExpensesSaga;