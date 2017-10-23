import { connect } from 'react-redux';
import DepartmentList from '../components/DepartmentList';
import { editDepartment, removeDepartment } from '../actions';

const mapStateToProps = state => {
  return {
    departments: state.departments
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (id, department) => {
            dispatch(editDepartment(id, department));
        },
        onDelete: (index) => {
            dispatch(removeDepartment(index));
        }
    }
}

const Departments = connect(
    mapStateToProps,
    mapDispatchToProps
)(DepartmentList)

export default Departments;
