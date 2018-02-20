import { combineReducers } from 'redux';
import SalesReducer from './reducer_sales';
import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({ //creates application state
  sales: SalesReducer,
  products: ProductsReducer
});

export default rootReducer;
