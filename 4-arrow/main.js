class TaskCollection {

    constructor (tasks = []) {
        this.tasks = tasks;
    }

    logger () {
        this.tasks.forEach((task) => {
            console.log(this); // this指的是TaskCollection
        });
        
        // this.tasks.forEach(function(task) {
        //     console.log(this); // this指的是Task
        // });

        // this.tasks.forEach((task, index) => {
        //     console.info(task, index);
        // });
    }
}

class Task {

    toGulp () {
        console.info('go gulping.');
    }
}

new TaskCollection([
    new Task,
    new Task,
    new Task
    ]).logger();


let names = ['taylor', 'jeffery', 'admam', 'matt'];
names = names.map(name => {
    return name + ' is cool too.';
});

console.info(names);
