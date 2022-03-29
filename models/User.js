/* Creating a class called User. */
const { v4: uuidv4 } = require('uuid');

const UserModel = class User {

    id;
    fullName;
    email;
    age;
    type;
    role;
    status;
    password;


    constructor( fullName, email, age, password ){
        this.id = uuidv4();
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.type = 'USER';
        this.role = 'BASIC';
        this.status = 'ACTV';
        this.password = password
    }

}

module.exports = {
    UserModel
}