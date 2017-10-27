function *numbers() {
    console.info('begin');
    yield 1;
    yield 2;
    yield 3;
}

let iterator = numbers();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


function *range(start, end) {
    while(start < end) {
        yield start;
        start++;
    }
}

let it2 = range(1, 5);
console.info(it2.next());

console.info([...range(1, 10)]);
