class Person {

    constructor (name) {
        this.name = name;
    }

    greeting () {
        alert(this.name + ' says hello.');
    }
}

export default Person;
