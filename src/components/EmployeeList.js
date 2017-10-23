import React from 'react';
import EditableRow from './EditableRow';

const Employees = ({ employees, onChange, onDelete, departments }) => (
      <div>
        <h1>Employees</h1>
        <table>
          <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              {employees.map((employee, index) =>
                  <EditableRow
                      key={employee.id}
                      object={employee}
                      departments={departments}
                      onChange={(data) => onChange(employee.id, data)}
                      onDelete={() => onDelete(index)} />
              )}
          </tbody>
        </table>
      </div>
);

export default Employees;
