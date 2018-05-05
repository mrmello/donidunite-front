import { call, put, takeEvery } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'

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
}

export default watcherCategorySelectorSaga;