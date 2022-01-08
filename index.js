const inquirer = require("inquirer");
const fs = require("fs");

 const teamMembers = [];

 //add inquirer for adding new employee
function addTeam() {
    inquirer.prompt ([
        {
            type:"confirm",
            name: "addNewTeam",
            message: "Would you like to create a new Team?",
        },

    ]).then((data) => {
        console.log(data.addNewTeam);
        // if (!addNewTeam) {
        //     return ("You have chosen to NOT create a new team...");
        // } else ("You have chosen to create a new Team. Lets begin with filling out the Team Managers Profile")
        // addManager();
    });
}
addTeam();
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
    ]).then((data) => {
        const manager = new Manager(data.managerName, data.managerID, data.managerOfficeNum, data.managerEmail);
        teamMembers.push(manager);

    });
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the Engineers ID #?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the Engineer's GitHub name?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's Email Address?"
        }
    ]).then((data) => {
        const engineer = new Manager(data.engineerName, data.engineerID, data.engineerGithub, data.engineerEmail);
        teamMembers.push(engineer);

    });
}

function addIntern() {
    inquirer.prompt ([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internID",
            message: "What is the interns ID #?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the intern's School name?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's Email Address?"
        }
    ]).then((data) => {
        const intern = new Manager(data.internName, data.internID, data.internSchool, data.internEmail);
        teamMembers.push(intern);

    });
}