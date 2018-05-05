import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegionAdapter from "../RegionAdapter";
import RegionRegistry from "../RegionRegistry";
import ViewRegistry from "../ViewRegistry";
import RegionBehavior from "../RegionBehavior";


class TargetControlWrapper extends Component {

    constructor(props, context) {
        super(props, context);
        Object.assign(this, props);

        this.region = this.regionAdapter.initialize(this.regionName, this);
        this.regionAdapter.onSetInitialState(this.region, this);
    }

    componentDidMount() {
        this.regionAdapter.onComponentDidMount(this.region, this);
    }

    componentWillUnmount() {
        this.regionAdapter.onComponentWillUnmount(this.region, this);
    }

    render() { return null }

}

TargetControlWrapper.defaultProps = {
    regionAdapter: new RegionAdapter()
};

TargetControlWrapper.contextTypes = {
    regionRegistry: PropTypes.instanceOf(RegionRegistry),
    viewRegistry: PropTypes.instanceOf(ViewRegistry),
};

TargetControlWrapper.propTypes = {
    regionName: PropTypes.string.isRequired,
    regionAdapter: PropTypes.instanceOf(RegionAdapter).isRequired
};

export default TargetControlWrapper;








