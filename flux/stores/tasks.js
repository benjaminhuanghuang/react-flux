import EventEmitter from 'events';
import dispatcher from '../dispatcher';
import * as ACT from '../types';

class TaskStore extends EventEmitter {
    constructor() {
        super();
        this.tasks = [];
        this.action = this.action.bind(this);
    }

    getTasks() {
        return this.tasks.slice(0);
    }

    loadTaks(tasks)
    {
        this.tasks = tasks;
    }

    addTask(payload) {
        const tasks = this.tasks.slice(0);
        tasks.push(task);
        this.tasks = tasks;
        this.emit('change');
    }

    action({ type, payload }) {
        switch (type) {
            case ACT.ADD_TASK:
                this.addTask(payload);
                break;
            case ACT.ALL_TASKS:
                this.addTask(payload);
                break;

        }
    }
}

const store = new TasksStore();
dispatcher.register(store.action);
