import TaskCollection from './TaskCollection';
import {app} from './config';

console.dir(app);

new TaskCollection([
    'to go store',
    'finish screen',
    'eat cake'
    ]).dump();
