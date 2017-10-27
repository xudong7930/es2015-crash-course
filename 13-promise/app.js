// promise
var thing = new Promise((resolve, reject) => {
    console.info("promise init.");
    if (false) {
        resolve();
    } else {
        reject();
    }
});

thing.then(() => {
    console.info(111);
}).catch(() => {
    console.info(222);
})
