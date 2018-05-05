import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegionRegistry from "../RegionRegistry";
import ViewRegistry from "../ViewRegistry";

class RegionManager extends Component {

    constructor(props) {
        super(props);
        Object.assign(this, props);
    }

    getChildContext() {
        return {
            regionRegistry: this.regionRegistry,
            viewRegistry: this.viewRegistry
        };
    }

    render() {
        return this.props.children;
    }

}

RegionManager.childContextTypes = {
    regionRegistry: PropTypes.instanceOf(RegionRegistry),
    viewRegistry: PropTypes.instanceOf(ViewRegistry),
};

RegionManager.propTypes = {
    regionRegistry: PropTypes.instanceOf(RegionRegistry),
    viewRegistry: PropTypes.instanceOf(ViewRegistry),
};

RegionManager.defaultProps = {
    regionRegistry: new RegionRegistry,
    viewRegistry: new ViewRegistry,
};

export default RegionManager;








