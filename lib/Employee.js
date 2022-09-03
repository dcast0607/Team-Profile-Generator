//  Initializes the Employee class. 
class Employee {

    // This is a constructor that takes a few arguments [name, id, and email] and assigns it to the
    // Employee object.
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // This function will be used to retrieve the employee's name. 
    getEmployeeName() {
        return this.name;
    };
    
    // This function will be used to retrieve the employee's id. 
    getEmployeeId() {
        return this.id;
    };

    // This function will be used to retrieve the employee's email.
    getEmployeeEmail() {
        return this.email;
    };

    // This function will be used to retrieve the employee object.
    getRole() {
        return 'Employee';
    };
};

// Used to export the Employee class. 
module.exports = Employee;