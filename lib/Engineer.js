// This will bring in the Employee class so that it can be used to extend the
// Engineer class. 

const Employee = require('./Employee');

// Creating the Engineer class and extending it so that we can use the same properties
// as the Employee class. 
class Engineer extends Employee {
    constructor( name, id, email, github) {

        // Allows the Engineer class to use the Employee attributes. 
        super(name, id, email);

        // Assigns the github function variable and assigns it to the objects
        // github attribute. 
        this.github = github;
    };

    // This function will be used to retrieve the Engineer's github attribute. 
    getEngineerGithub() {
        return this.github;
    };

    //  This function will be used to return the engineer object. 
    getEngineerRole() {
        return 'Engineer';
    };
};

// This exports the Engineer class so that it can be used elsewhere. 
module.exports = Engineer;