import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import reducerBurgerBuilder from './Store/reducers/reducerBurgerBuilder';
import thunk from 'redux-thunk';
import reducerOrder from './Store/reducers/reducerOrder';
import authReducer from './Store/reducers/reducersAuth';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;

const rootReducer = combineReducers({
  burgerBuilder: reducerBurgerBuilder,
  order: reducerOrder,
  auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter >
      <App/>
    </BrowserRouter>
  </Provider>

);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
