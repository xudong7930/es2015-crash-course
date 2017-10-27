// ...为spread运算符
function sum(...numbers) {
    return numbers.reduce((prev, curr, index, arr) => {
        return prev + curr;
    });
    
}


let total = sum(1, 2, 3, 4);
console.info(total);


// example 2
let names = ['talor', 'jeffery'];
function showName(nameA, nameB) {
    console.log(nameA, nameB);
}

showName(...names);
