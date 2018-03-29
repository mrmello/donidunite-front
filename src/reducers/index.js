import { combineReducers } from 'redux';
import SalesReducer from './reducer_sales';
import ProductsReducer from './reducer_products';
import ExpensesReducer from './reducer_expenses';
import IncomesReducer from './reducer_incomes';
import CategoriesReducer from './reducer_categories';

const rootReducer = combineReducers({ //creates application state
  sales: SalesReducer,
  products: ProductsReducer,
  expenses: ExpensesReducer,
  incomes: IncomesReducer,
  categories: CategoriesReducer,
});

export default rootReducer;
