class RegionRegistry {

    constructor() {
        this.regions = {}
    }

    addRegion(region) {
        if (this.regions[region.name])
            throw new Error(`Region '${region.name}' already exists`);
        this.regions[region.name] = region;
    }

    removeRegion(name) {
        delete this.regions[name];
    }
}

export default RegionRegistry;

