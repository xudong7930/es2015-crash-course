class User {

    constructor (name, isAdmin) {
        this.name = name;
        this.isAdmin = isAdmin;
    }
}

let users = [
    new User("jeffery", false),
    new User('haoshuyun', true),
    new User('jack', false)
];

let admins = users.find((item) => {
    return item.isAdmin;
});
console.info(admins.name);
