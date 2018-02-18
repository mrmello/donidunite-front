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
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter>
      <Route path="/" component={HomeScreen} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
