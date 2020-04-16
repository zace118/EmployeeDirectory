import React, { Component } from 'react';
import Card from '../Card';
class Employee extends Component {
    render() {
        return (
            <div className="employee">
                {this.props.employees.map(employee => (
                    <Card key={employee.id} name={employee.name} role={employee.role} department={employee.department} image={employee.image} />
                ))}
            </div>
        )
    };
};
export default Employee;