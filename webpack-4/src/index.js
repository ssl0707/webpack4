import App from './app';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import mock from './mock/mock.js';
mock()
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("app"));