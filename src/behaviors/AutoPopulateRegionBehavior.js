import RegionBehavior from "../RegionBehavior";

class AutoPopulateRegionBehavior extends RegionBehavior {

    constructor(viewRegistry) {
        super();

        if (!viewRegistry)
            throw new Error('viewRegistry not available. Make sure RegionManager exists in parent tree or viewRegistry passed in control context.');

        this.viewRegistry = viewRegistry;
    }

    onAttach() {
        const region = this.region;

        // populate existing views in registry
        const views = this.viewRegistry.getRegionViews(region.name);
        views.forEach(function(view) {
            region.addView(view);
            //console.debug("AutoPopulate behavior: added a view. Region views count: " + region.views.length);
        });

        // subscribe to populate dynamically added views
        this.viewRegistry.onViewRegistered(function(regionName, view) {
            if (region.name === regionName) {
                region.addView(view);
            }
        });
    }
}

export default AutoPopulateRegionBehavior;

