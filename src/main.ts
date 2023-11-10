class Main {
    private _myf:MyFramework;

    main(): void {
        this._myf = new MyFramework();
        let b:HTMLElement = this._myf.getElementById("boton");
        console.log(b);
        b.textContent = "Haceme click!";
        let users:Array<User> = [];
        users.push(new User(1, "juan@juan.com", "juan"));
        users.push(new User(2, "pepe@pepe.com", "pepe"));
        users.push(new User(3, "ana@juan.com", "ana"));
        this.mostrarUsers(users);
    }

    mostrarUsers(users:Array<User>): void {
        for(let i in users) {
            users[i].printInfo();
        }
    }
}

window.onload = () => {
    let m:Main = new Main();
    m.main();
};