class Main {
    main() {
        this._myf = new MyFramework();
        let b = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        let users = [];
        users.push(new User(1, "juan@juan.com", "juan"));
        users.push(new User(2, "pepe@pepe.com", "pepe"));
        users.push(new User(3, "ana@juan.com", "ana"));
        this.mostrarUsers(users);
    }
    mostrarUsers(users) {
        for (let i in users) {
            users[i].printInfo();
        }
    }
}
window.onload = () => {
    let m = new Main();
    m.main();
};
