import React from 'react';

class View {

    constructor(component, props, name) {
        this.component = component;
        this.props = props;
        this.name = name;
    }

    toComponent(extraProps = {}) {
        const Component = this.component;
        const props = Object.assign({}, this.props || {}, extraProps);
        return <Component {...props}/>
    }
}

export default View;








