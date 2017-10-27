class User {

    constructor (username, email) {
        this.username = username;
        this.email = email;
    }
    
    // 静态方法
    static register(username, email) {
        return new User(username, email);
    }

    static login(...args) {
        return new User(...args);
    }

    get foo() {
        return this.username;
    }

    set bar(name) {
        this.username = name;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

let user = new User('xudong', 'surport@example.com');
user.changeEmail('sbjsw@qq.com');
console.info(user);
console.info(user.foo);


let ergou = User.register('sb', 'sb@qq.com');
console.dir(ergou);
