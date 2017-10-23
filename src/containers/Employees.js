import { connect } from 'react-redux';
import EmployeeList from '../components/EmployeeList';
import { removeEmployee, editEmployee } from '../actions';

const mapStateToProps = state => {
  return {
    employees: state.employees,
    departments: state.departments
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (index) => {
            dispatch(removeEmployee(index));
        },
        onChange: (id, data) => {
            dispatch(editEmployee(id, data));
        }
    }
}

const Employees = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList)

export default Employees;
