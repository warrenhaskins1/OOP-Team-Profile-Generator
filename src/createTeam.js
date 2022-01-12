//This will construct the html for building out the Team
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const createTeam = team => {

    //Render Manager Card
    const createManager = manager => {
        return `
        <div class="card mx-4 shadow" style="width: 18rem;">
            <div class="card-header">
                <h4 class="card-title">${manager.getName()}</h2>
                    <h5 class="card-title">${manager.getRole()}<i class="bi bi-megaphone"></i></h3>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office #: ${manager.getOffice()}</li>
                </ul>
            </div>
        </div>`
    };

    //Render Engineer Card
    const createEngineer = engineer => {
        return`<div class="card mx-4 shadow" style="width: 18rem;">
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
    </div>`
    };

    //Render Intern Card
    const createIntern = intern => {
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
    </div>`
    };
}