import EventEmitter from 'event';
import dispatcher from '../dispatcher';
import * as ACT from '../types';

class TaskStore extends EventEmitter{
    constructor(){
        super();
        this.action = this.action.bind(this);
    }
    
    addTask(payload){
        
    }

    action ({type, payload}){
        switch(type){
            case ACT.ADD_TASK:
                this.addTask(payload);
                break;
        }
    }
}

const store = new TasksStore();
dispatcher.register(store.action);
