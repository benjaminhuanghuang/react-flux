import React from 'react';
//
import Task from './task';
import Button from './button';
import taskStore from '../flux/stores/tasks';
import { addTask } from '../flux/actions/tasks';

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: taskStore.getTasks()
        }

        this.addTask = this.addTask.bind(this);
    }

    componentDidMount() {
        //Listen the event raisd by store
        taskStore.on('change', () => {
            this.setState({
                tasks: taskStore.getTasks()
            });
        });
    }

    addTask(e) {
        const tasks = this.state.tasks.slice(0);
        const input = this.input;
        // Call action
        addTask({
            label: input.value,
            _id: tasks.length
        });
    }

    render() {
        const { tasks } = this.state;
        const chl = [];
        for (const { _id, label, ...rest } of tasks) {
            chl.push(<Task key={_id}>label</Task>);
        }
        return (
            <div>
                {chl}
                <input name="add" type="text" ref={(a) => { this.input = a }} />
                <Button className="-secondary" onClick={this.addTask}>Add Task</Button>
            </div>
        );
    }
}