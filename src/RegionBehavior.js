class RegionBehavior {

    constructor() {
        this.region = undefined;
        this.isAttached = false;
    }

    attach(region) {
        if (!region)
            throw new Error('Behavior cannot be attached to undefined region');
        this.region = region;
        this.region.addBehavior(this);
        this.isAttached = true;

        //console.debug("Behavior " + this.constructor.name + " attached.");
        this.onAttach();
    }

    onAttach() {}
}

export default RegionBehavior;

