import React from 'react';
import RegionAdapter from "../RegionAdapter";
import SingleViewRegion from "../regions/SingleViewRegion";

import RegistrationRegionBehavior from "../behaviors/RegistrationRegionBehavior";
import AutoPopulateRegionBehavior from "../behaviors/AutoPopulateRegionBehavior";
import AutoActivateAllRegionBehavior from "../behaviors/AutoActivateAllRegionBehavior";

class ItemsControlRegionAdapter extends RegionAdapter {

    buildBehaviors(targetControlWrapper) {
        return [
            new RegistrationRegionBehavior(targetControlWrapper.context && targetControlWrapper.context.regionRegistry),
            new AutoPopulateRegionBehavior(targetControlWrapper.context && targetControlWrapper.context.viewRegistry),
            new AutoActivateAllRegionBehavior
        ];
    }

    onSetInitialState(region, targetControlWrapper) {
        targetControlWrapper.state = {views: region.activeViews};
    }

    onComponentDidMount(region, targetControlWrapper) {
        region.onActiveViewsChanged(() => {
            targetControlWrapper.setState({view: region.activeViews});
        })
    }

    onComponentWillUnmount(targetControlWrapper) {

    }
}

export default ItemsControlRegionAdapter;








