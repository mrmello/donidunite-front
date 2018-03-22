import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import HomeScreen from './components/home_screen/home_screen';
import FinancialScreen from './components/financial_screen/financial_screen';
import ProductsScreen from './components/products_screen/products_screen';
import OrdersScreen from './components/orders_screen/orders_screen';
import ReportsScreen from './components/reports_screen/reports_screen';
import NavigationMenu from './components/navigation_menu/navigation_menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter>
      <div>
        <NavigationMenu />
        <div className="view-content">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/products" component={ProductsScreen} />
          <Route path="/orders" component={OrdersScreen} />
          <Route path="/financial" component={FinancialScreen} />
          <Route path="/reports" component={ReportsScreen} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
