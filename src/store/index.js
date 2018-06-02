import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    sagaMiddleware,
  )
)
sagaMiddleware.run(sagas)

export default Store
