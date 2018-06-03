import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import SalesReducer from '../containers/orders/ordersReducer';
import ProductsReducer from '../containers/products/productsReducer';
import ExpensesReducer from '../containers/expenses/expensesReducer';
import IncomesReducer from '../containers/incomes/incomesReducer';
import CategorySelectorReducer from '../containers/categorySelector/categorySelectorReducer';
import IncluderReducer from '../components/includer/includerReducer';
import NotificationReducer from '../components/commons/notification/notificationBarReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  sales: SalesReducer,
  products: ProductsReducer,
  expenses: ExpensesReducer,
  incomes: IncomesReducer,
  categories: CategorySelectorReducer,
  includer: IncluderReducer,
  notification: NotificationReducer
});

export default rootReducer;
