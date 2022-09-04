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

const renderHTMLData = async () => {
    // TODO: Find a way to render the HTML file from the data that's entered.

    const renderedHTMLCode = await userDataParser(userInputData)
    .then((data) => {
        fileData = data;
        console.log(typeof(data));
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


const managerPrompts = () => {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: "Please enter your manager's name: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid first name and last name.
                        return /^[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter your manager's ID number: ",
                    // This regex will validate for a user entering an alpha numeric value.
                    validate: function (name) {
                        return /^[a-zA-Z0-9]+$/.test(name)
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter your manager's email address: ",
                    validate: function (name) {
                        // This regex will validate for a user entering a valid email address.
                        return /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/.test(name);
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter your manager's office number: ",
                    validate: function (name) {
                        return /^[0-9]{1,4}$/.test(name);
                    }
                }
            ]
        )

        .then((managerAnswers) => {
            console.log(managerAnswers);

            const addManagerData = new Manager(
                managerAnswers.name,
                managerAnswers.id,
                managerAnswers.email,
                managerAnswers.officeNumber
            );

            // TODO: Find a way to generate the HTML page from this data....
            userInputData.push(addManagerData);
            console.log(userInputData);
            navMenu();
        });

};

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
        .then((internAnswers) => {
            console.log(internAnswers);
            const addInternData = new Intern(
                internAnswers.name,
                internAnswers.id,
                internAnswers.email,
                internAnswers.school
            );

            // TODO: Find a way to generate the HTML page from this data....
            userInputData.push(addInternData);
            console.log(userInputData);
            navMenu();
        });
};


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
        .then((engineerAnswers) => {
            console.log(engineerAnswers);

            const addEngineerData = new Engineer(
                engineerAnswers.name,
                engineerAnswers.id,
                engineerAnswers.email,
                engineerAnswers.github
            );

            // TODO: Find a way to generate the HTML page from this data....
            userInputData.push(addEngineerData)
            console.log(userInputData);
            navMenu();
        });
};

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