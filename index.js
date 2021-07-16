const inquirer = require('inquirer');

const fs = require('fs');
const generatePage = require('./src/page-template');

//ask for basic info
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of team manager? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter manager name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter your id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'eamil',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                }
                else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }
    ])
}

//ask for role question option
const promptRole = profileData => {
    if (!profileData.employee) {
        profileData.employee = [];
    }

    console.log(`
    =================
    Add New Employee
    =================
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What do you want to add?',
            choices: ['Engineer', 'Intern', 'Finish building my team']
        },
    ])
        .then(employeeData => {
            profileData.employee.push(employeeData);
            if (employeeData.role === 'Engineer') {
                return promptEngineer();

            }
            else if (employeeData.role === 'Intern') {
                return promptIntern();
            }
            else {
                return profileData;
            }
        })
}

//as engineer role question
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of engineer? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer id number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter your id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'eamil',
            message: 'What is engineer email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is engineer GitHub username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
    ])
        .then(promptRole);
}

//as intern role question
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of intern? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern id number? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log('Please enter your id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'eamil',
            message: 'What is the intern email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern school? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log('Please enter your school!');
                    return false;
                }
            }
        },
    ])
        .then(promptRole);
}



promptUser()
    .then(promptRole)
    .then(profileData => {
        return generatePage(profileData);
    })
    // .then(writefile)