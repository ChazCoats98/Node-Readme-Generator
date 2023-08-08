// TODO: Include packages needed for this application
var http = require("http");
var fs = require("fs");
var inquirer = require("inquirer");
var util = require("util");
var generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {type: "input",
    name: "title",
    message: "What is the title of your project?"},
    {type: "input",
    name: "description",
    message: "Describe what your project was made for"},
    {type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"},
    {type: "input",
    name: "usage",
    message: "Describe how to use your project"},
    {type: "input",
    name: "contribution",
    message: "List any contribution guidelines"},
    {type: "input",
    name: "test",
    message: "List any test instructions"},
    {type: "input",
    name: "GitHub",
    message: "What is your GitHub username?"},
    {type: "input",
    name: "email",
    message: "What is your email address?"},
    {type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"]}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("readme.md", data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("README.MD file has been generated")
    });
}

// TODO: Create a function to initialize app
async function init() {
    var answers = await inquirer.prompt(questions);
}

// Function call to initialize app
init();
