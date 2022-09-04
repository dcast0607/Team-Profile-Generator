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

- Running test suite demo: https://www.loom.com/share/001b94d408cf40faaf235b4dbaca5e26
- Invoking application demo: https://www.loom.com/share/2ed65fe0285d47c7ab471159c9815ddd
- User prompt/input demo: https://www.loom.com/share/4b03403a28dd4181b129b58a88c14615
- Generated HTML demo: https://www.loom.com/share/18ca84102cbf48708626fa953d4d00be
- Full walkthrough demo: https://www.loom.com/share/777f5d95e2f941e7b526db9b180a174c

## Licensing

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</br>
[![License: Jest](https://img.shields.io/badge/License-Jest-brightgreen)]</br>
[![License: FS](https://img.shields.io/badge/License-FS-yellowgreen)]</br>
[![License: Inquirer](https://img.shields.io/badge/License-Inquirer-red)]</br>

## Contributors

**Author:** Daniel Castro
**Github:** https://github.com/dcast0607
**Email:** dancastro.java@gmail.com

## Questions

If you have any questions or concerns, please contact me via email. 