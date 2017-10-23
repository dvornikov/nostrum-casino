import {
    ADD_EMPLOYEE,
    EDIT_EMPLOYEE,
    RECEIVE_EMPLOYEES,
    REMOVE_EMPLOYEE
} from '../actions';

export default function employees(state = [], action) {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return [
                ...state,
                action.employee
            ];
            break;

        case EDIT_EMPLOYEE:
            return state.map(employee =>
                employee.id === action.id ?
                {
                    ...employee,
                    ...action.employee
                } :
                employee
            )
            break;

        case REMOVE_EMPLOYEE:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;

        case RECEIVE_EMPLOYEES:
            return [
                ...action.employees
            ];
            break;

        default:
            return state;
    }
}
