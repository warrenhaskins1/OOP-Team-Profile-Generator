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
        name: "name",
        message:
          "Every Team must start with a Manager. What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Managers ID #?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's Email Address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's Office #?",
      },
      
    ])
    .then((data) => {
      console.log(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber,
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
        name: "engineerEmail",
        message: "What is the Engineer's Email Address?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineer's GitHub name?",
      },
      
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.engineerName,
        data.engineerID,
        data.engineerEmail,
        data.engineerGithub
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
        name: "internEmail",
        message: "What is the intern's Email Address?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's School name?",
      },
     
    ])
    .then((data) => {
      const intern = new Intern(
        data.internName,
        data.internID,
        data.internEmail,
        data.internSchool
        
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
