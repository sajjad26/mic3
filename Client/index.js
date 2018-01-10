require("babel-polyfill");
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import App from './Components/App';
import reducers from './Reducers';

const initialState = {};
const store = createStore(
	reducers, 
	applyMiddleware(
		thunkMiddleware
		//logger
	));

const appComponent = (
	<Provider store={store}><App /></Provider>
);

render(appComponent, document.getElementById('app'));