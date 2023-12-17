//Includes packages needed for this application
const inquirer = require("inquirer");
const generate = require('./utils/generate.js');
const fs = require("fs");

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who/what else contributed on the project?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the test results of the project',
    },
    
    // manges what license the user can choose from
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ["Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause \"Simplified\" License",
        "BSD 3-Clause \"New\" or \"Revised\" License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
        "No License"
    ]
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// This function writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File "${fileName}" has been successfully created!`);
        }
    });
}

// this manages the prompts and uses the user inputs to adds information to the read me. 
function init() {
    // Use inquirer to prompt the user with the defined questions
    inquirer.prompt(questions).then((answers) => {
        // Generate content using answers and write to file
        const readmeContent = generate(answers);
        const fileName = "README.md";
        writeToFile(fileName, readmeContent);
    });
}

// Function call to initialize app
init();