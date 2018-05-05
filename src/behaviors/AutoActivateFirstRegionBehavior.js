import RegionBehavior from "../RegionBehavior";

class AutoActivateFirstRegionBehavior extends RegionBehavior {

    onAttach() {
        const region = this.region;

        if (region.views.length > 0 && region.activeViews.length === 0) {
            region.activateView(region.views[0]);
            //console.debug("AutoActivate behavior: activated a view. Region active views count: " + region.activeViews.length);
        }


        region.onViewAdded(function(view) {
            if (region.activeViews.length === 0)
                region.activateView(view);
        });
    }
}

export default AutoActivateFirstRegionBehavior;

