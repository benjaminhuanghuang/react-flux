import React from 'react';
//
import Button from './button';
export default class Tasks extends React.Component{
    render(){
        return <Button className="-primary -lg -block">{this.props.children}</Button>;
    }
}