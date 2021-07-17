
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.role = this.getRole();
        this.id = id;
        this.email = email;
    }

    getName() {
        return {
            name: this.name
        }
    }

    getId() {
        return {
            id: this.id
        }
    };

    getEmail() {
        return {
            email: this.email
        }
    };

    getRole() {
        return `Employee`
    };

}
module.exports = Employee;