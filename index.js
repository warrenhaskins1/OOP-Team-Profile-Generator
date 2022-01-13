const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createTeam = require("./src/createTeam.js");
const fileName = "index.html";

const teamMembers = [];

//We need a function to start the Team build. Manager must be one of the selections

//add inquirer for adding new employee
addTeam();
function addTeam() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "addNewTeam",
        message: "Would you like to create a new Team?",
      },
    ])
    .then((data) => {
      console.log(data.addNewTeam);
      if (data.addNewTeam === true) {
        addManager();
      }
    });
}


//function to add Manager (required)
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message:
          "Every Team must start with a Manager. What is the Manager's name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What is the Managers ID #?",
      },
      {
        type: "input",
        name: "managerOfficeNum",
        message: "What is the Manager's Office #?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's Email Address?",
      },
    ])
    .then((data) => {
      console.log(
        data.managerName,
        data.managerID,
        data.managerOfficeNum,
        data.managerEmail
      );
      const manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerOfficeNum,
        data.managerEmail
      );
      teamMembers.push(manager);
      addNewTeamMember();
    });
}

//After user has selected the Manager first we can choose to add Engineers or Interns or be finished with Team Building.
function addNewTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addNewTeamMember",
        message:
          "Choose which employee role you would like to add to the Team:",
        choices: ["Engineer", "Intern", "Finish building the Team"],
      },
    ])
    .then((data) => {
      switch (data.addNewTeamMember) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Finish building the Team":
            createTeamPage();
          break;
      }
    });
}
//function to add engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "engineerID",
        message: "What is the Engineers ID #?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's GitHub name?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's Email Address?",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerGithub,
        data.engineerEmail
      );
      teamMembers.push(engineer);
      addNewTeamMember();
    });
}

// function to add intern
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internID",
        message: "What is the interns ID #?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's School name?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's Email Address?",
      },
    ])
    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internID,
        data.internSchool,
        data.internEmail
      );
      teamMembers.push(intern);
      addNewTeamMember();
    });
}

function writeToFile(fileName, data) {
    const index = createTeam(data);
    fs.writeFile(fileName, index, (err) =>
      err
        ? console.log(err)
        : console.log(
            "Excelsior! You have just created a professional README.md file!"
          )
    );
  }
  
  
function createTeamPage() {
    console.log("Congrats")
    fs.writeFile("./dist/index.html", createTeam(teamMembers), (err) => {
        err
        ? console.log(err)
        : console.log(
            "Excelsior! You have just created a professional README.md file!"
          )
    })
}
