import React from 'react';
import Region from "./Region";

class RegionAdapter {

    initialize(regionName, targetControlWrapper) {
        if (!regionName)
            throw new Error('Adapter region name is undefined');

        const region = this.createRegion();
        region.setName(regionName);

        this.attachBehaviors(region, targetControlWrapper);

        return region;
    }

    createRegion() { return new Region; }
    buildBehaviors(targetControlWrapper) { return []; }

    attachBehaviors(region, targetControlWrapper) {
        this.buildBehaviors(targetControlWrapper).forEach(function(b) {
            b.attach(region);
        })
    }

    onSetInitialState(region, targetControlWrapper) { }
    onComponentDidMount(region, targetControlWrapper) {}
    onComponentWillUnmount(region, targetControlWrapper) {}
}

export default RegionAdapter;








