// require Employee.js
const Employee = require("./Employee")
// extend Manager as Employee and create constructor function for Engineer input for js HTML generator
class Manager extends Employee {
    constructor(name, email, id, telephone){
        super (name, email,  id);
        this.telephone = telephone;
    }
    getRole() {
        return "Manager";
    }
    getTelephone() {
        return this.telephone;
    }
}
module.exports = Manager;