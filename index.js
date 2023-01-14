// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the name of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'write a table of contents for the project',
        name: 'table_of_contents',
    },
    {
        type: 'input',
        message: 'how do you install this application',
        name: 'installation',
    },
    {
        type: 'checkbox',
        message: 'what license does this application use?',
        name: 'license',
        choices: [
            'MIT',
            'Apache_2.0',
            'Perl',
            'None',
        ]

    },
    {
        type: 'input',
        message: 'how do you use this application',
        name: 'usage',
    },



];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, generateMarkdown(data), 'utf8',(err) => err ? console.log(err) : console.log('Success!'));
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            console.log(data)
            writeToFile('README.md', data);
        })
            
        
}

// Function call to initialize app
init();
