import React, { Component } from 'react';

export default class EditableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            data: this.props.object
        };

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDepartment = this.getDepartment.bind(this);
    }

    handleEdit(field) {
        let data = {
            [field]: this.refs[field].value
        };

        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                ...data
            }
        }));
    }

    handleSubmit() {
        let data = {};

        for (const field in this.refs) {
            data[field] = this.refs[field].value;
        }

        this.props.onChange(data);
console.log(data);
        this.toggleEdit();
    }

    toggleEdit() {
        this.setState(prevState => ({
            editing: !prevState.editing
        }));
    }

    getDepartment(id) {
        let dep = this.props.departments.find(department => department.id == id);
        return dep && dep.name || '';
    }

    render() {
        return (
            <tr>
            {Object.keys(this.props.object)
                .filter(element => ( element !== 'id'))
                .map(key =>
                <td key={key}>
                    {
                        this.state.editing ?
                            key === 'department' ?
                            (<select ref={key} onChange={() => this.handleEdit(key)}>
                                { this.props.departments.map((dep) =>
                                    <option selected={dep.id == this.state.data[key]} value={dep.id}>{dep.name}</option>
                            )}
                            </select>) :
                            (<input ref={key} value={this.state.data[key]} onChange={() => this.handleEdit(key)} />) :
                        key === 'department' ? this.getDepartment(this.state.data[key]) : this.props.object[key] }
                </td>
            )}
                <td>
                    {
                        this.state.editing ?
                        (<button onClick={this.handleSubmit}>Сохранить</button>) :
                        (<button onClick={this.toggleEdit}>Изменить</button>)
                    }
                    <button onClick={this.props.onDelete}>Удалить</button>
                </td>
            </tr>
        );
    }
}
