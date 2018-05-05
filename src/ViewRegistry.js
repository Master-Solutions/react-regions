import EventEmitter from "events";
import View from "./View";

const EVT_VIEW_REGISTERED = 'viewRegistered';

class ViewRegistry extends EventEmitter {

    constructor() {
        super();
        this.regionViews = {};
        this.events = new EventEmitter();
    }

    registerViewInRegion(regionName, component, props, name) {
        this.regionViews[regionName] = this.regionViews[regionName] || [];
        const view = new View(component, props, name);
        this.regionViews[regionName].push(view);
        this.emit(EVT_VIEW_REGISTERED, regionName, view);
    }

    getRegionViews(regionName) {
        return this.regionViews[regionName] || [];
    }

    onViewRegistered(fn) {
        this.on(EVT_VIEW_REGISTERED, fn)
    }

    end() {
        this.removeAllListeners(EVT_VIEW_REGISTERED);
    }
}

export default ViewRegistry;

