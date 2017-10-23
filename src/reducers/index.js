import { combineReducers } from 'redux';
import departments from './departments';
import employees from './employees';

const rootReducer = combineReducers({
    departments,
    employees
});

export default rootReducer;
