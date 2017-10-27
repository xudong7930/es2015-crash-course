// 将类作为参数传递
function logger(strategy) {
    strategy.handle();
}

class ConsoleLogger {

    handle() {
        console.info("using the console info");
    }
}

logger(new class {
    handle() {
        console.info('usering the console info to log');
    }
});

logger(new ConsoleLogger);


