import React from 'react';

export default class Button extends React.Component{
    render(){
        const {className} = this.props;
        
        return <button type="button" className="btn btn -primary btn-lg btn-block">{this.props.children}</button>;
    }
}