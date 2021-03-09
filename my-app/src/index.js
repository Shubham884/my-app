import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

/* Custom Reducers */

import emailReducer from './store/reducers/email'
import passReducer from './store/reducers/password'

/* Combine Reducers */

const rootReducer = combineReducers({
  emailReducer,
  passReducer
})

/* Create Redux store */
const store = createStore(rootReducer)


const renderApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
render(renderApp(), rootElement);
