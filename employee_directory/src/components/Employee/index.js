import React, { Component } from 'react';
import employees from '../../employees.json';
import Card from '../Card'

class Employee extends Component {
    render() {
        return (
            <div className="employee">
                {employees.map(employee => (
                    <Card
                        key={employee.id}
                        name={employee.name}
                        role={employee.role}
                        department={employee.department}
                        image={employee.image} />
                ))}
            </div>
        )
    }
}

export default Employee;