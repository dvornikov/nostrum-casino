import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Departments from './containers/Departments';
import Employees from './containers/Employees'

const Sidebar = () => (
    <ul>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/employees">Employees</Link></li>
    </ul>
)

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content">
                    <Route exact path="/" component={Departments} />
                    <Route path="/departments" component={Departments} />
                    <Route path="/employees" component={Employees} />
                </div>
            </div>
        </Router>
    </Provider>
);

export default App;
