# Team Profile Generator

## Overview

The objective of this project is to give a manager the option to enter data about their team through a command line interface. Once the manager
has entered this data through the command line interface, we take this data and render an HTML document that contains code that depicts the information
that the manager has entered. 

To get this project to a working state, we introduced some automated testing, objects, fs npm package and heavily use inquire package to prompt the user to enter
the right employee data. 

## Table of Contents:
- [Overview](#overview)
- [Usage](#usage)
- [Demo](#demo)
- [Licensing](#licensing)
- [Contributors](#contributors)
- [Questions](#questions)

## Usage

#### Installation

Before you run this application, you must ensure that you have the appropriate dependencies installed. To install the appropriate dependencies, please make sure that
you run the following command. 

`npm i -y` 

Running this command will install the dependencies that have been defined in our package.json file. Running this command will install `inquirer, jest, and fs`. 

#### Running the Application

Once you have installed the dependencies, you should be able to run `npm start` to start up the application. This command will initialize the application and you should be presented with some
options to enter data. After each employee entry that you enter you will be given the option to enter a new employee entry or the option to generate your "team". Choosing the "Create Team" option 
will render HTML code that will contain the information that you have entered. You can find this code in the `dist` directory. 

#### Running the Test Suite

To run the test suit you can use the command `npm test`. You can find the tests by navigating to the `tests` directory. 

## Demo

## Licensing

## Contributors

## Questions

If you have any questions or concerns, please contact me via email. 