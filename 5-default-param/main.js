function discount(cost, discout) {
    discout = discout || .10;
    return cost - cost*discout;
}

// 默认参数
function zhekou(cost, discout = .10) {
    return cost - cost * discout;
}

console.info(discount(100, .40));
console.info(zhekou(100, .30));
