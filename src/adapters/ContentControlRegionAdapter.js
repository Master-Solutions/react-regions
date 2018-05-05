import React from 'react';
import RegionAdapter from "../RegionAdapter";
import SingleViewRegion from "../regions/SingleViewRegion";

import RegistrationRegionBehavior from "../behaviors/RegistrationRegionBehavior";
import AutoPopulateRegionBehavior from "../behaviors/AutoPopulateRegionBehavior";
import AutoActivateFirstRegionBehavior from "../behaviors/AutoActivateFirstRegionBehavior";

class ContentControlRegionAdapter extends RegionAdapter {

    createRegion() {
        return new SingleViewRegion()
    }

    buildBehaviors(targetControlWrapper) {
        return [
            new RegistrationRegionBehavior(targetControlWrapper.context && targetControlWrapper.context.regionRegistry),
            new AutoPopulateRegionBehavior(targetControlWrapper.context && targetControlWrapper.context.viewRegistry),
            new AutoActivateFirstRegionBehavior
        ];
    }

    onSetInitialState(region, targetControlWrapper) {
        targetControlWrapper.state = {view: region.activeViews[0]};
    }

    onComponentDidMount(region, targetControlWrapper) {
        region.onActiveViewsChanged(() => {
            targetControlWrapper.setState({view: region.activeViews[0]});
        })
    }

    onComponentWillUnmount(targetControlWrapper) {

    }
}

export default ContentControlRegionAdapter;








