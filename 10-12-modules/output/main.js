'use strict';

var TaskCollection = function TaskCollection (tasks) {
    if ( tasks === void 0 ) tasks = [];

    this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump () {
    console.dir(this.tasks);
};

var app = {
    appname: 'your app name',
    appversion: '1.0'
};

console.dir(app);

new TaskCollection([
    'to go store',
    'finish screen',
    'eat cake'
    ]).dump();
