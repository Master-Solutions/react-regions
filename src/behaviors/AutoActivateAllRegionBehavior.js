import RegionBehavior from "../RegionBehavior";

class AutoActivateAllRegionBehavior extends RegionBehavior {

    onAttach() {
        const region = this.region;

        region.views.forEach(function(view) {
            region.activateView(view);
        });

        region.onViewAdded(function(view) {
            region.activateView(view);
        });
    }
}

export default AutoActivateAllRegionBehavior;

