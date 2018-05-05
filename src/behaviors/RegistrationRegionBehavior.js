import RegionBehavior from "../RegionBehavior";

class RegistrationRegionBehavior extends RegionBehavior {

    constructor(regionRegistry) {
        super();

        if (!regionRegistry)
            throw new Error('regionRegistry not available. Make sure RegionManager exists in parent tree or regionRegistry passed in control context.');

        this.regionRegistry = regionRegistry;
    }

    onAttach() {
        this.regionRegistry.addRegion(this.region);
    }
}

export default RegistrationRegionBehavior;

