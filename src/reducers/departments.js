import {
    ADD_DEPARTMENT,
    EDIT_DEPARTMENT,
    REMOVE_DEPARTMENT,
    RECEIVE_DEPARTMENTS
} from '../actions';

export default function departments(state = [], action) {
    switch (action.type) {
        case ADD_DEPARTMENT:
            return [
                ...state,
                {
                    name: action.name
                }
            ];
            break;

        case EDIT_DEPARTMENT:
            return state.map(department =>
                department.id === action.id ?
                { ...department, ...action.department } :
                department
            );
            break;

        case REMOVE_DEPARTMENT:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            break;

        case RECEIVE_DEPARTMENTS:
            return [
                ...action.departments
            ];
            break;

        default:
            return state;
    }
}
