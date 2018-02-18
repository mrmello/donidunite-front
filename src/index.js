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
import Expenses from './components/expenses/expenses';
import Header from './components/header/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/home" component={HomeScreen} />
        <Route path="/expenses" component={Expenses} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
