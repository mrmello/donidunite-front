import { combineReducers } from 'redux';
import SalesReducer from '../containers/orders/ordersReducer';
import ProductsReducer from '../containers/products/productsReducer';
import ExpensesReducer from '../containers/expenses/expensesReducer';
import IncomesReducer from '../containers/incomes/incomesReducer';
import CategoriesReducer from '../containers/category-selector/categoriesReducer';

const rootReducer = combineReducers({ //creates application state
  sales: SalesReducer,
  products: ProductsReducer,
  expenses: ExpensesReducer,
  incomes: IncomesReducer,
  categories: CategoriesReducer,
});

export default rootReducer;
