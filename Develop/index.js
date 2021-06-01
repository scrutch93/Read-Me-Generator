// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
         {
           type: 'input',
           name: 'Title',
           message: 'Enter name of Project?',
         },

          {
            type: 'input',
            name: 'Description',
            message: 'Describe your project',

          },
          {
            type: 'input',
            name: 'Installation',
            message: 'How do you install this application?',
          },
          {
            type: 'input',
            name: 'Usage',
            message: 'What is this used for?',
          },
          {
            type: 'input',
            name: 'Contributing',
            message: 'Would you like to contribute to this project?',
          },
          {
            type: 'input',
            name: 'Tests',
            message: 'What tests have been run on this project?',
          },
          {
            type: 'input',
            name: 'Questions',
            message: 'Please list any questions or concerns regarding this project?',
          },
         

    ]);

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
