import { combineReducers } from 'redux';
import SalesReducer from './reducer_sales';

const rootReducer = combineReducers({ //creates application state
  sales: SalesReducer
});

export default rootReducer;
