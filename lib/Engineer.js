// require Employee.js
const Employee = require("./Employee");
// extend Engineer as Employee and create constructor function for Engineer input for js HTML generator
class Engineer extends Employee {
    constructor(name, email, id, github){
        super (name, email, id)
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;