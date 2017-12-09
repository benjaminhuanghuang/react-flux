

import dispatcher from '../dispatcher';
import * as ACT from '../types';
import ajax from '../../utils/ajax';

export function addTasks(task) {
    ajax({
        url:'/add-task',
        data: task,
        successHook: (task)=>{
            addTasksSync(task);
        },
    })
}

export function addTasksSync(task) {
    dispatcher({
        type: ACT.ADD_TASK,
        payload: task
    });
}

export function getAllTasks(){
    ajax({
        url:'/all',
        method: 'get',
        successHook: (tasks)=>{
            dispatcher({
                type: ACT.ALL_TASKS,
                payload: tasks
            });
        },
    })
}