// const inquirer = require("inquirer");
import inquirer from 'inquirer';

// Your code that uses inquirer
import fs from "fs";

// const fs = require("fs");
//import { someFunction } from './esmModule.mjs'; // Replace with the actual module path
// const generateMarkdown = require ("./storage/generateMarkdown");

// import generateMarkdown from "./storage/generateMarkdown.js";
import { generateMarkdown } from "./storage/generateMarkdown.js";


const questions = [
    {
        type: "input",
        name: "title",
        message: "Please title your project.",
    },

    {
        type: "input",
        name: "description",
        message: "Please describe your challenge.",
    },
    
    {
        type: "input",
        name: "installation",
        message: "Please input steps for installation.",
    },

    {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
    },

    {
        type: "list",
        name: "license",
        message: "What licenses will be used?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
    },

    {
        type: "input",
        name: "tests",
        message: "Please input instructions for testing.",
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your github username.",
    },

    {
        type: "input",
        name: "email",
        message: "Please provide your email.",
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
    if(err){
    console.log(err);
    }else {
       console.log("success");
    }
   });
}


function init() {
   inquirer.prompt(questions).then((data) => {
       console.log(JSON.stringify(data))
    const markDown = generateMarkdown(data);
    writeToFile("README.md", markDown);
   });
}

init();