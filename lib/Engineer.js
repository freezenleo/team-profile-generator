const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email, githubUsername);

        this.githubUsername = githubUsername;

    }
    getGithub() {
        return {
            githubUsername: this.githubUsername
        }
    }

    getRole() {
        return `Engineer`
    }

}

module.exports = Engineer;