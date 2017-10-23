export const REQUEST_DEPARTMENTS = 'REQUEST_DEPARTMENTS';
export const RECEIVE_DEPARTMENTS = 'RECEIVE_DEPARTMENTS';
export const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
export const EDIT_DEPARTMENT = 'EDIT_DEPARTMENT';
export const REMOVE_DEPARTMENT = 'REMOVE_DEPARTMENT';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

function receiveDepartments(json) {
    return {
        type: RECEIVE_DEPARTMENTS,
        departments: json
    }
}

export function editDepartment(id, data) {
    return {
        type: EDIT_DEPARTMENT,
        department: data,
        id: id
    }
}

export function removeDepartment(index) {
    return {
        type: REMOVE_DEPARTMENT,
        index: index
    }
}

export function fetchDepartments() {
    return dispatch => {
        return fetch('http://localhost:3004/departments')
            .then(response => response.json())
            .then(json => dispatch(receiveDepartments(json)));
    }
}

function receiveEmployees(json) {
    return {
        type: RECEIVE_EMPLOYEES,
        employees: json
    }
}

export function editEmployee(id, data) {
    return {
        type: EDIT_EMPLOYEE,
        employee: data,
        id: id
    }
}

export function removeEmployee(index) {
    return {
        type: REMOVE_EMPLOYEE,
        index: index
    }
}

export function fetchEmployees() {
    return dispatch => {
        return fetch('http://localhost:3004/employees')
            .then(response => response.json())
            .then(json => dispatch(receiveEmployees(json)));
    }
}
