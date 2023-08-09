// TODO: Include packages needed for this application
var http = require("http");
var fs = require("fs");
var inquirer = require("inquirer");
var util = require("util");
var generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const question = [
    {
    name: "title",
    type: "input",
    message: "What is the title of your project?"},
    {
    type: "input",
    name: "description",
    message: "Describe what your project was made for"},
    {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"},
    {
    type: "input",
    name: "usage",
    message: "Describe how to use your project"},
    {
    type: "input",
    name: "contribution",
    message: "List any contribution guidelines"},
    {
    type: "input",
    name: "test",
    message: "List any test instructions"},
    {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"},
    {
    type: "input",
    name: "email",
    message: "What is your email address?"},
    {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["GNU", "Mozilla", "Apache", "MIT", "Boost", "Unlicense"]}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("README.MD file has been generated")
    });
}

// TODO: Create a function to initialize app
async function init() {
    inquirer.prompt(question).then(function(data) {
        console.log(data);
        writeToFile("./output/readme.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
