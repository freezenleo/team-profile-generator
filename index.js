const inquirer = require('inquirer');

const fs = require('fs');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter your name!');
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
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])

        .then(promptData => {
            profileData.profile.push(promptData);
            if (promptData.role === 'Manager') {
                return promptManager();
            }
            else if (promptData.role === 'Engineer') {
                return promptEngineer();
            }
            else {
                return promptIntern();
            }
        })


}

const promptManager = () => {
    return inquirer.prompt([
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
        },
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
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
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What is your school? (Required)',
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
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then(userData => {
            profileData.profile.push(userData);
            if (userData.confirmAddEmployee) {
                return promptUser(profileData);
            }
            else {
                return profileData;
            }
        })
}

promptUser()
    .then()