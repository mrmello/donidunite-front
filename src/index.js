import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/home_screen/home_screen';
import Financial from './components/financial_screen/financial_screen';
import Products from './components/products_screen/products_screen';
import Orders from './components/orders_screen/orders_screen';
import Reports from './components/reports_screen/reports_screen';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/financial" component={Financial} />
        <Route path="/reports" component={Reports} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
