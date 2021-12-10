// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "What is the name of this project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Describe this project?"
    },
    {
        type: "input",
        name: "Installation",
        message: "Please enter instructions on how this project will be used."  
    },
    {
        type: "input",
        name: "usage",
        message: "Please advise examples on how to use (screenshot or short video)." 
    },
    {
        type: "input",
        name: "Credits",
        message: "Please enter list od collaborators." 
    },
    {
        type: "checkbox",
        name: "License",
        message: "What License will you use?",
        choices: ["ISC", "NCSA", "lgpl-3.0", "gpl-3.0","MIT", "ZLIB",]
    },
    {
        type: "input",
        name: "Test",
        message: "How would someone test this application?" 
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please add example of what you might want to add." 
    },

    
]).then(data => fs.writeFile("ReadME.md",`# ${data.Title}
## Descrition
${data.Description}
## Installation
${data.Installation}

` , error => {
    if (error) throw error
})
)
// TODO: Create a function to write README file

// TODO: Create a function to initialize app


// Function call to initialize app
