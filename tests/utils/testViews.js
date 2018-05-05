import React, {Component} from 'react';

export function inlineView(props) {return <h1>{props.content || 'Inline'}</h1>};

export const ComponentView = class extends Component {
    render() {
        return <h1>{this.props.content || 'Component'}</h1>
    }
};