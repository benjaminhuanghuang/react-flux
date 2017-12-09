import React from 'react';

export default class Button extends React.Component {
    render() {
        const className = ('btn ' + this.props.className).split(" -").join(' btn-');
        return <button type="button" className={className}>{this.props.children}</button>;
    }
}