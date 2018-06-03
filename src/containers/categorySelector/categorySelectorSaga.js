import { call, put, takeEvery } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'
import {
  toggleCategoryIncluder
} from '../../components/includer/includerActions'
import { fetchCategories as refreshCategories } from './categorySelectorActions'
import {
  showSuccessFeedback,
  showFailureFeedback
} from '../../components/commons/notification/notificationBarActions'

function* createCategory(action) {
  try {
    yield call(Api.createCategory, action.payload);
    yield put({type: types.CREATE_CATEGORY_SUCCEED});
    yield put(toggleCategoryIncluder())
    yield put(refreshCategories());
    yield put(showSuccessFeedback());
  } catch (e) {
    yield put(showFailureFeedback());
  }
}

function* fetchCategories(action) {
  try {
    const response = yield call(Api.fetchCategories);
    yield put({type: types.FETCH_CATEGORIES_SUCCEED, categories: response.data});
  } catch (e) {
    yield put({type: types.FETCH_CATEGORIES_FAILED, message: e.message});
  }
}

function* watcherCategorySelectorSaga() {
  yield takeEvery(types.FETCH_CATEGORIES_REQUESTED, fetchCategories);
  yield takeEvery(types.CREATE_CATEGORY_REQUESTED, createCategory);
}

export default watcherCategorySelectorSaga;