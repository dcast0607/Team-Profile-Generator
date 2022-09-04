// Bringing in our class definitions from the lib directory. 

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Importing function that will be used to render HTML code. 

const userDataParser = require('./utils/renderHTML');


// Brings in the inquirer package so that we can use it. We will use this
// to prompt the user. 
const inquirer = require('inquirer');

// We can use an array to hold our user input data. We can try to store the data as. 
/*
Array Element 0
    [
        {
            name: managerName,
            email: managerEmail,
            id: managerId,
            officeNumber: managerOfficeNumber
        }
    ]
*/

// We can cycle through this data to render an HTML page. 

const userInputData = [];

// Brings in the fs package so that we can use it. 
const fs = require('fs');
const { CodeArtifact } = require('aws-sdk');

// We will call this function once we've gathered user input to render and HTML page.
const renderHTMLData = async () => {

    // We call our imported function here. The goal he is to pass the data we've collected
    // to this function so that we can render the HTML code. 
    const renderedHTMLCode = await userDataParser(userInputData)
    // Data is passed to .then function to write a new document called "index.html" that will
    // hold our HTML code. 
    .then((data) => {
        fileData = data;
        // console.log(typeof(data));
        // Writing of the code happens here. 
        fs.writeFileSync('./dist/index.html', fileData, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("HTML file with team data has been created successfully, please navigate to the /src directory to view file.")
            };
        })
    })
    .catch((err) => {
        console.log(err);
    });
};


// We use the inquirer package to retrieve details about the manager. Here we collect
// full name, email address, user id, and office number. 
const managerPrompts = () => {
    inquirer
    // We have introduced some regex here to validate the user's input
    // the point of this is to only accept valid values for each of these fields. 
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter your name: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid first name and last name.
                        return /^[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter your ID number: ",
                    // This regex will validate for a user entering an alpha numeric value.
                    validate: function (name) {
                        return /^[a-zA-Z0-9]+$/.test(name)
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter your email address: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid email address.
                        return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter your office number: ",
                    validate: function (name) {
                        return /^[0-9]{1,4}$/.test(name);
                    }
                }
            ]
        )
        
        // Once we've collected the user input we can then use this data to create a new object with the information that the
        // user has entered. 
        .then((managerAnswers) => {
            // console.log(managerAnswers);

            // New object is created here. 
            const addManagerData = new Manager(
                managerAnswers.name,
                managerAnswers.id,
                managerAnswers.email,
                managerAnswers.officeNumber
            );

            // Once we've created our new object we take that object and add it to an array that will contain the information,
            // ultimately, this is what we will be passing to the html renderer function. 
            userInputData.push(addManagerData);
            // console.log(userInputData);
            // User is presented with the nav menu.
            navMenu();
        });

};

// We use the inquirer package here to prompt the user to enter some data. Like we did
// with the manager prompts, we add some regex to ensure that we are validating the data
// that is entered by the user. 
const internPrompts = () => {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter your intern's name: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid first name and last name.
                        return /^[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter your intern's ID number: ",
                    // This regex will validate for a user entering an alpha numeric value.
                    validate: function (name) {
                        return /^[a-zA-Z0-9]+$/.test(name)
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter your intern's email address: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid email address.
                        return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "Please enter your intern's school: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid school name. 
                        return /^[a-zA-Z]/.test(name);
                    }
                }
            ]
        )
        // We take the user input and render a new intern object. 
        .then((internAnswers) => {
            // console.log(internAnswers);
            const addInternData = new Intern(
                internAnswers.name,
                internAnswers.id,
                internAnswers.email,
                internAnswers.school
            );

            // Once user data has been entered, we add this to our array
            // that contains all user objects that were created by the user.
            userInputData.push(addInternData);
            // console.log(userInputData);
            // User is presented with the navMenu
            navMenu();
        });
};

// We use the inquirer package to prompt the user for engineer information. Similar to the other
// prompts, we validate the data that is entered by the user to ensure that the data entered is
// what we expect.
const engineerPrompts = () => {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter your engineer's name: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid first name and last name.
                        return /^[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter your engineer's ID number: ",
                    // This regex will validate for a user entering an alpha numeric value.
                    validate: function (name) {
                        return /^[a-zA-Z0-9]+$/.test(name)
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter your engineer's email address: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid email address.
                        return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "Please enter your engineer's GitHub account (username): ",
                    validate: function (name) {
                        // Adding regex to accept a possible Github username. 
                        return /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(name)
                    }
                }

            ]
        )
        // We take the user data and then create a new engineer object.
        .then((engineerAnswers) => {
            // console.log(engineerAnswers);

            const addEngineerData = new Engineer(
                engineerAnswers.name,
                engineerAnswers.id,
                engineerAnswers.email,
                engineerAnswers.github
            );

            // User input is added to the array that contains all of our data. 
            userInputData.push(addEngineerData)
            // console.log(userInputData);
            // Nav menu is presented to user.
            navMenu();
        });
};

// navMenu function is used to present the user with options to add a new employee record. Depending
// on what the end user selects, we will either prompt the user for new data or render our HTML
// code. 
const navMenu = () => {
    inquirer
        .prompt(
            [
                {
                    type: 'list',
                    name: 'choice',
                    message: "How would you like to proceed?",
                    choices: [
                        "Add an engineer",
                        "Add an intern",
                        "Create your team page",
                    ]
                }
            ]
        )
        // User choice is used to call other functions.
        .then((userSelection) => {
            console.log(userSelection);
            switch (userSelection.choice) {
                case "Add an engineer": engineerPrompts();
                    break;
                case "Add an intern": internPrompts();
                    break;
                default: 
                    renderHTMLData();
            }
        });
};


// Invokes our starter function called managerPrompts. 
managerPrompts(); 