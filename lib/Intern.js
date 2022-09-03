// Allows us to use the employee class in our Intern class. 
const Employee = require('./Employee');

// Initializes the Intern class and adds to it the Employee class instance. 
class Intern extends Employee {
    constructor(name, id, email, school) {
        // Allows the intern class to use the employee class data. 
        super(name, id, email);

        // Takes the school function argument and assigns it to the
        // Intern class school attribute. 
        this.school = school;
    };

    // This function will be used to retrieve the school attribute. 
    getSchool() {
        return this.school;
    };

    // This function will be used to retrieve the Intern object. 
    getRole() {
        return 'Intern';
    };
};

// This makes it so that Intern can be used outside of this file. 
module.exports = Intern;