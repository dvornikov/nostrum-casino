import {Model, fk, oneToOne, many} from "redux-orm";

export class Employee extends Model {}
Employee.modelName = "Employee";
Employee.fields = {
    departmentId: fk("Department")
};

export class Department extends Model {}
Department.modelName = "Department";
