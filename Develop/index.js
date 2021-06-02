// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

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

};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

const generateMarkdown = (answers) =>
`# Test ${answers.Title}

## Table of Contents
${answers.Title}

## Description
${answers.Description}
## Installation
${answers.Installation}
## Usage
${answers.Usage}
## License
${answers.Lincense}
## Contributing
${answers.Contribute}
## Tests
${answers.Tests}

## Questions
${answers.Questions}`;


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
const init = () => {
  questions()
    .then((answers) => writeFileAsync('markdown.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to markdown.md'))
    .catch((err) => console.error(err));
};

init();
