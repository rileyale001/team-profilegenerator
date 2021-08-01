// require and create paths to directories
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const showHtml = require('./lib/generateMarkdown');
const gen_DIR = path.resolve(__dirname, "dist");
const companyPATH = path.join(gen_DIR, "company.html");
const teamRoster = [];
//asks user for manager information
function getManagerInfo() {
    console.log("Manager Information Here")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "number",
            message: "What is the manager's team ID?",
            name: "id"
        },
        {
            type: "number",
            message: "What is the manager's telephone number?",
            name: "telephone"
        },
        // manager info is stored into managerInfo
    ]).then((managerInfo) =>{
        const getNewManager = new Manager (managerInfo.name, managerInfo.email, managerInfo.id, managerInfo.telephone);
        teamRoster.push(getNewManager);
        getTeamMemberPosition();
    })
}
// function asks user to select position of the employee 
function getTeamMemberPosition() {
    console.log("");
    console.log('What is the postion of the employee?')
    return inquirer.prompt([
        {
            type: "list",
            message: "Select Employee or Intern for the role of the team member or select CREATE TEAM NOW",
            choices: ["Engineer", "Intern", " create Team"],
            name: "employeeType"
        },
        // User selects Engineer or Intern if nether HTML is created
    ]).then((teamMemberRoleSelection) => {
        if (teamMemberRoleSelection.employeeType === "Engineer") {
            getEngineerInfo();
        }
        else if (teamMemberRoleSelection.employeeType === "Intern") {
            getInternInfo();
        }
        else {
            createRosterHtml();
        }
    })
}
// function asks user for Engineer information when Engineer position is selected
function getEngineerInfo() {
    console.log("Engineer Information Here")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the Engineer's email?",
            name: "email"
        },
        {
            type: "number",
            message: "What is the Engineer's team ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the Engineer's github?",
            name: "github"
        },
    ]).then((engineerInfo) =>{
        const getNewEngineer = new Engineer (engineerInfo.name, engineerInfo.email, engineerInfo.id, engineerInfo.github);
        teamRoster.push(getNewEngineer);
        getTeamMemberPosition();
    })
}
// function asks user for Intern info when Intern is selected as position choice
function getInternInfo() {
    console.log("Intern Information Here")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: "number",
            message: "What is the interns's team ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's school name?",
            name: "school"
        },
    ]).then((internInfo) =>{
        const getNewIntern = new Intern (internInfo.name, internInfo.email, internInfo.id, internInfo.school);
        teamRoster.push(getNewIntern);
        getTeamMemberPosition();
    })
}
// function that creates Html and printes Company Roster HTML creaeted
function createRosterHtml() {
    const roster = showHtml(teamRoster);
    // Creat path to directory 
    fs.writeFile(companyPATH, roster, function (error) {
        if(error) {
            console.log(error);
        }
        console.log("Company Roster HTML created");
    });
}
// starts the appliction
getManagerInfo();