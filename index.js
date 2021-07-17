const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(
                console.log('page created')
            );
        });
    });
};

const { generatePage } = require('./src/page-template.js');

const profileData = [];

//ask for basic info
const promptUser = () => {
    console.log(`
    ===============
    Add a New Employee
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of employee? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please enter name!');
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
            name: 'email',
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
    ])
        .then(function ({ name, id, email, role }) {
            let roleSection = '';
            if (role === 'Manager') {
                roleSection = 'officeNumber';
            }
            else if (role === 'Engineer') {
                roleSection = 'username';

            }
            else if (role === 'Intern') {
                roleSection = 'school';
            }
            inquirer.prompt([
                {
                    message: `What is your ${roleSection}?`,
                    name: "roleSection",
                },
                {
                    type: "list",
                    name: "addMembers",
                    message: "Would you like to add more team members?",
                    choices: [
                        "Yes",
                        "No"
                    ],
                }
            ])
                .then(function ({ roleSection, addMembers }) {
                    let newMember = '';
                    if (role === 'Manager') {
                        newMember = new Manager(name, id, email, roleSection);
                    }
                    else if (role === 'Engineer') {
                        newMember = new Engineer(name, id, email, roleSection);
                    }
                    else if (role === 'Intern') {
                        newMember = new Intern(name, id, email, roleSection)
                    }

                    profileData.push(newMember)

                    if (addMembers === "Yes") {
                        promptUser(profileData);
                    }
                    else {
                        fileContent = generatePage(profileData);
                        writeFile(fileContent);
                    }

                })

        })
}


promptUser();