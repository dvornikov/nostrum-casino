import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers';
import {
    fetchDepartments,
    fetchEmployees
} from './actions';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchDepartments());
store.dispatch(fetchEmployees());

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
