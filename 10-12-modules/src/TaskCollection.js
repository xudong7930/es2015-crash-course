class TaskCollection {

    constructor (tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.dir(this.tasks);
    }
}

// export let foo = 'bar'; // 可以有多个
// 只能有一个default
export default TaskCollection;



