// Declaring a few empty arrays that we will be using to store the data so that we can
// add it as part of our HTML code.

let managerUserData = [];
let engineerUserData = [];
let internUserData = [];


function renderBaseHTMLCode () {

};

function renderManagerHTMLCode(managerData){

};

function renderEngineerHTMLCode(engineerData){

};

function renderInternHTMLCode(internData){
    
};


function userDataParser(userData) {

    // Printing data passed by from the index.js file.
    console.log(userData);

    // Validating the right user roles.
    let i = 0;
    userData.forEach((user) => {
        let currentUser = i + 1; 
        console.log(`User ${currentUser} Role: `, user.getRole());
        i++;

        if (user.getRole() == 'Manager') {
            managerUserData.push(user);
        }
        else if (user.getRole() == 'Engineer') {
            engineerUserData.push(user);
        }
        else if (user.getRole() == 'Intern') {
            internUserData.push(user);
        }
        console.log("We were not able to identify the user role.");

        renderBaseHTMLCode();
        renderManagerHTMLCode(managerUserData);
        renderEngineerHTMLCode(engineerUserData);
        renderInternHTMLCode(internUserData);

    });
};

module.exports = userDataParser;