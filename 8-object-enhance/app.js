// example 1
function person() {
    let name = 'ergou';
    let age = 26;
    // return {name: name, age: age};
    return {name, age};
}

console.info(person()); // { name: 'ergou', age: 26 }


// example 2
let you = {
    name: 'haoshuyun',
    age: 26,
    count: 30,
    foo: ['bar1', 'bar2'],
    greet () {
        return `hello, ${this.name} says`;
    }
}
console.info(you.greet());

let {count, foo} = you;
console.info(count, foo);


