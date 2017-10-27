function fire(bool) {
    var foo;

    if (bool) {
        foo = 'bar';
        console.info(foo);
    } else {
        console.info(foo);
    }
}

fire(false);

// var 变量(不推荐): 全局变量

// let 变量(推荐)
let name = 'jeff';
name = 'new name';
console.info(name);

// const 常量: 不能被重新赋值
const names = ['john', 'sandy', 'susan'];
names.push('jeffery');
console.info(names);
