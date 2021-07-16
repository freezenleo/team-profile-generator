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
    //identify employee role
    // .then(promptData => {
    //     profileData.employee.push(promptData);
    //     if (promptData.role === 'Manager') {
    //         return promptManager();
    //     }
    //     else if (promptData.role === 'Engineer') {
    //         return promptEngineer();
    //     }
    //     else if (promptData.role === 'Intern') {
    //         return promptIntern();
    //     }
    //     else {
    //         return profileData;
    //     }
    // })

    // .then()


}

//as manager role question
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
            else if (promptData.role === 'Intern') {
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

//as intern role question
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

.then(employeeData => {
    profileData.employee.push(employeeData);
    if (employeeData.role === 'Engineer') {
        return promptEngineer();
    }
    else if (promptData.role === 'Intern') {
        return promptIntern();
    }
    else {
        return profileData;
    }
})

promptUser()
    .then()
    .then(profileData => {
        return generatePage(profileData);
    })
    .then(writefile)