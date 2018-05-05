import { all, fork } from 'redux-saga/effects'

import productsSaga from '../containers/products/productsSaga'

export default function* root() {
  yield all([
    fork(productsSaga),
  ])
}
