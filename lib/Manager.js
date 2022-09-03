// This will allow us to use the employee object attributes as part of the Manager class. 
// Specially the name, id, and email of the employee. 
const Employee = require('./Employee');


// Creates the Manager class and extends/adds on top of it by utilizing the Employee data. 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        // Allows the manager class to utilize name, id, and email attributes. 
        super(name, id, email);

        // Takes the officeNumber attribute passed as a function parameter and assigns it to
        // the objects officeNumber attribute. 
        this.officeNumber = officeNumber;
    };

    // This function will allow us to retrieve the object's officeNumber attribute.
    getOfficeNumber() {
        return this.officeNumber;
    };

    // This function allow us to retrieve the Manager object. 
    getManagerRole() {
        return 'Manager';
    }
};

// Used to export the Manager class. 
module.exports = Manager; 