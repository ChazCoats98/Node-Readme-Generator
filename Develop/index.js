// TODO: Include packages needed for this application
var http = require("http");
var fs = require("fs");
var inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", 
"Describe what your project was made for", 
"What are the steps required to install your project?", 
"Describe how to use your project", 
"List any contribution guidelines", 
"List any test instructions"];

inquirer.prompt(questions).then((answers)=> {
    console.log(answers);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("readme.md", )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
