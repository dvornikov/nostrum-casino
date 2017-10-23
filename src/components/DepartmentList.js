import React from 'react';
import EditableRow from './EditableRow';

const DepartmentList = ({ departments, onChange, onDelete }) => (
    <div>
        <h1>Departments</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((department, index) =>
                    <EditableRow
                        key={department.id}
                        object={department}
                        onChange={(data) => onChange(department.id, data)}
                        onDelete={() => onDelete(index)} />
                )}
            </tbody>
        </table>
    </div>
);

export default DepartmentList;
