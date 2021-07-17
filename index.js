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
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const { generatePage } = require('./src/page-template.js');

const profileData = [];

//ask for basic info
const promptUser = () => {

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
    ])
        .then(function ({ name, id, email, role }) {
            let roleSection = '';
            if (role === 'Manager') {
                roleSection = 'officeName';
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
                    if (roleSection === 'Manager') {
                        newMember = new Manager(name, id, email, role, roleSection);
                    }
                    else if (roleSection === 'Engineer') {
                        newMember = new Engineer(name, id, email, role, roleSection);
                    }
                    else if (roleSection === 'Engineer') {
                        newMember = new Intern(name, id, email, role, roleSection)
                    }
                    profileData.push(newMember)
                    // .then(profileData => {
                    if (addMembers === "Yes") {
                        promptUser(profileData);
                    }
                    else {
                        fileContent = generatePage(profileData);
                        writeFile(fileContent);
                    }
                    // })
                })

        })
}


promptUser();
    // .then(profileData => {
    //     const pageHTML = generatePage(profileData);

    //     fs.writeFile('./dist/index.html', pageHTML, err => {
    //         if (err) throw new Error(err);
    //         console.log('Page created in dist folder!')
    //     })

    // })
    // .catch(err => {
    //     console.log(err);
    // });


    // as engineer role question
// const promptManager = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is your office number? (Required)',
//             validate: officeNumberInput => {
//                 if (officeNumberInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter your office number!');
//                     return false;
//                 }
//             }
//         },


//     ])

// }


// //as engineer role question
// const promptEngineer = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'username',
//             message: 'What is engineer GitHub username? (Required)',
//             validate: usernameInput => {
//                 if (usernameInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter your GitHub username!');
//                     return false;
//                 }
//             }
//         },
//     ])

// }

// //as intern role question
// const promptIntern = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'school',
//             message: 'What is the intern school? (Required)',
//             validate: schoolInput => {
//                 if (schoolInput) {
//                     return true;
//                 }
//                 else {
//                     console.log('Please enter your school!');
//                     return false;
//                 }
//             }
//         },
//     ])

// }