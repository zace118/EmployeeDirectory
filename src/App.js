import React, { Component } from 'react';
import './App.css';
import Employee from './components/Employee';
import Button from './components/Button';
import employees from './employees.json';


class App extends Component {
    // Setting state to the employees.json file
    state = {
        employees: employees
    };

    // Our custom method sortEmployees. Handles the sort functionality on the button click. 
    sortEmployees = (a, b) => {
        const personA = a.name.toUpperCase();
        const personB = b.name.toUpperCase();

        let comparison = 0;

        if (personA > personB) {
            comparison = 1;
        } else if (personA < personB) {
            comparison = -1;
        }

        console.log(comparison);
        return comparison;
    }

    filterEmployees = () => {
        // This is a hard coded function that we intend to change later down the road. 
        return this.state.employees.filter(employee => employee.department === "Engineering")
    }
    render() {
        return (
            <>
                {/* This reads: this (class based comp.), set state(). We're setting the object of employees with the value of this.state.employees and then sort them, taking in this.sortEmployees function as it's parameter.  */}
                <Button onClick={() => this.setState({ employees: this.state.employees.sort(this.sortEmployees) })}>Sort</Button>
                {/* This reads: this (class based comp.), set state(). Similarly, setting the employees obj's value to this.filterEmployees(). We want the filter employees to run on click, but not immediately, which is why it is nested.  */}
                <Button onClick={() => this.setState({ employees: this.filterEmployees() })}>Find All Engineers</Button>
                <Employee employees={this.state.employees} />
            </>
        );
    }
}
export default App;