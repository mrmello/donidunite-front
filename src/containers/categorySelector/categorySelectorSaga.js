import { call, put, takeLatest } from 'redux-saga/effects'
import types from '../../actions/types'
import Api from '../../api'

function* fetchCategoriesByType(action) {
   try {
      const response = yield call(Api.fetchCategoriesByType, action.payload);
      yield put({type: types.FETCH_CATEGORIES_BY_TYPE_SUCCEED, categories: response.data});
   } catch (e) {
      yield put({type: types.FETCH_CATEGORIES_BY_TYPE_FAILED, message: e.message});
   }
}

function* watcherCategorySelectorSaga() {
  yield takeLatest(types.FETCH_CATEGORIES_BY_TYPE_REQUESTED, fetchCategoriesByType);
}

export default watcherCategorySelectorSaga;