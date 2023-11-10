class User {
    constructor(id, email, name) {
        this._id = id;
        this._email = email;
        this._name = name;
        this._isLogged = false;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set isLogged(flag) {
        this._isLogged = flag;
    }
    get isLogged() {
        return this._isLogged;
    }
    printInfo() {
        console.log(`"Nombre: ${this._name} email: ${this._email} logged: ${this._isLogged}`);
    }
}
