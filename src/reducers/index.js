import { combineReducers } from 'redux';
import SalesReducer from '../containers/orders/ordersReducer';
import ProductsReducer from '../containers/products/productsReducer';
import ExpensesReducer from '../containers/expenses/expensesReducer';
import IncomesReducer from '../containers/incomes/incomesReducer';
import CategorySelectorReducer from '../containers/categorySelector/categorySelectorReducer';

const rootReducer = combineReducers({
  sales: SalesReducer,
  products: ProductsReducer,
  expenses: ExpensesReducer,
  incomes: IncomesReducer,
  categories: CategorySelectorReducer,
});

export default rootReducer;
