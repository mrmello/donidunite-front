import { all, fork } from 'redux-saga/effects'

import productsSaga from '../containers/products/productsSaga'
import categorySelectorSaga from '../containers/categorySelector/categorySelectorSaga'
import ordersSaga from '../containers/orders/ordersSaga'
import incomesSaga from '../containers/incomes/incomesSaga'
import expensesSaga from '../containers/expenses/expensesSaga'

export default function* root() {
  yield all([
    fork(productsSaga),
    fork(ordersSaga),
    fork(expensesSaga),
    fork(incomesSaga),
    fork(categorySelectorSaga),
  ])
}
