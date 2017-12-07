import React from 'react';

export default class Tasks extends React.Component{
    render(){
        return <button type="button" className="btn btn-primary btn-lg btn-block">{this.props.children}</button>;
    }
}