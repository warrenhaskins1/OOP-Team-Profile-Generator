const inquirer = require("inquirer");
const fs = require("fs");

 const teamMembers = [];

function addManager() {

    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the Managers ID #?"
        },
        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is the Manager's Office #?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Manager's Email Address?"
        }
    ])
}