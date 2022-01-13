//This will construct the html for building out the Team
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const createTeam = (team) => {
  //Render Manager Card
  const createManager = (manager) => {
    return `
        <div class="card mx-4 shadow" style="width: 18rem;">
            <div class="card-header">
                <h4 class="card-title">${manager.getName()}</h2>
                    <h5 class="card-title">${manager.getRole()} <i class="bi bi-megaphone"></i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office #: ${manager.getOffice()}</li>
                </ul>
            </div>
        </div>`;
  };

  //Render Engineer Card
  const createEngineer = (engineer) => {
    return `<div class="card mx-4 shadow" style="width: 18rem;">
        <div class="card-header">
            <h4 class="card-title">${engineer.getName()}</h2>
                <h5 class="card-title">${engineer.getRole()} <i class="bi bi-calculator"></i></h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>`;
  };

  //Render Intern Card
  const createIntern = (intern) => {
    return `<div class="card mx-4 shadow" style="width: 18rem;">
        <div class="card-header">
            <h4 class="card-title">${intern.getName()}</h2>
                <h5 class="card-title">${intern.getRole()}<i class="bi bi-book"></i></h3>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${intern.getName()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`;
  };

  const generateHTML = [];

  generateHTML.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  generateHTML.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  generateHTML.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return generateHTML.join("");
};

//Render Main html template that appends above
module.exports = (team) => {
  return `
    <!doctype html>
<html lang="en">

    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Roboto+Mono:ital@0;1&display=swap"
            rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        <title>Meet My Team!!!</title>
    </head>

    <body>
        <div class="container-fluid p-3 m-2">
            <div class="jumbotron jumbotron-fluid shadow">
                <div class="container">
                    <h1 class="display-4 text-center">Introducing the Team</h1>
                    <p class="lead"></p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 justify-content-center d-flex">
            ${createTeam(team)}
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
            crossorigin="anonymous"></script>



    </body>

</html>`;
};
