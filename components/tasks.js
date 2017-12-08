import React from 'react';
//
import Task from './task';
import Button from './button';

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { _id: 0, label: 'task1' },
                { _id: 1, label: 'task2' },
                { _id: 2, label: 'task3' },
                { _id: 3, label: 'task4' },
            ]
        }
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
                <input name="add" type="text"/>
                <Button className="btn btn-secondary">Add Task</Button>
            </div>
        );
    }
}