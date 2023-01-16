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
        message: 'give a short description of what the application does',
        name: 'description',
    },
    // {
    //     type: 'input',
    //     message: 'write a table of contents for the project',
    //     name: 'table_of_contents',
    // },
    {
        type: 'input',
        message: 'how do you install this application(optional)',
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
        message: 'Provide instructions for use of this application',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Explain how users can contribute to this application',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide a test of your application, and explain how to test(Optional)',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'enter your email address',
        name: 'email',
    },



];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, generateMarkdown(data), 'utf8',(err) => err ? console.log(err) : console.log('Success!'));
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
    // passes questions array to inquirer
        .prompt(questions)
        // then the name of the file and data is passed to the writeToFile function 
        .then(data => {
            console.log(data)
            writeToFile('README.md', data);
        })
            
        
}

// Function call to initialize app
init();
