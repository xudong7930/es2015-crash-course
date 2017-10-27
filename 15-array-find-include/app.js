let numbers = [2, 4, 6, 8, 10];

// es 5
console.info(numbers.indexOf(10) > -1); // 数组查找

// es 6
console.info(numbers.includes(10));


let one = numbers.find((item) => {
    return item > 6;
});
console.info(one);

let s = ['jeff', 'jordan', 'way'];

// 是of 不是 in
for (let name of s.entries()) {
    console.info(name);
}





