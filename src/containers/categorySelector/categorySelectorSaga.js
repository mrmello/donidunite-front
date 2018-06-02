import { call, put, takeEvery } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'
import {
  toggleCategoryIncluder
} from '../../components/includer/includerActions'

function* saveCategory(action) {
  try {
    yield call(Api.saveCategory, action.payload);
    yield put({type: types.SAVE_CATEGORY_SUCCEED});
    yield put(toggleCategoryIncluder())
  } catch (e) {
    yield put({type: types.SAVE_CATEGORY_FAILED});
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
  yield takeEvery(types.SAVE_CATEGORY_REQUESTED, saveCategory);
}

export default watcherCategorySelectorSaga;