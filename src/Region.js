import EventEmitter from "events";

const EVT_VIEW_ADDED = 'viewAdded';
const EVT_VIEW_REMOVED = 'viewRemoved';
const EVT_VIEWS_CHANGED = 'viewsChanged';

const EVT_ACTIVE_VIEW_ADDED = 'activeViewAdded';
const EVT_ACTIVE_VIEWS_CHANGED = 'activeViewsChanged';

class Region extends EventEmitter {

    constructor() {
        super();
        this.name = undefined;

        this.views = [];
        this.activeViews = [];

        this.behaviors = [];
    }

    setName(name) { this.name = name }

    addBehavior(behavior) {
        this.behaviors.push(behavior);
    }

    addView(view) {
        this.views.push(view);
        this.emit(EVT_VIEW_ADDED, view);
        this.emit(EVT_VIEWS_CHANGED, 'add', view)
    }

    removeView(viewToRemove) {
        this.views.find(function(view) {
            return _.isEqual(view, viewToRemove);
        })
    }

    getViewByName(viewName) {
        this.views.find(function(view) {
            return view.name === viewName;
        })
    }

    activateView(view) {
        this.activeViews.push(view);
        this.emit(EVT_ACTIVE_VIEW_ADDED, view);
        this.emit(EVT_ACTIVE_VIEWS_CHANGED, 'add', view)
    }
    deactivateView(view) {}

    onViewAdded(fn) {
        this.on(EVT_VIEW_ADDED, fn);
    }

    onViewsChanged(fn) {
        this.on(EVT_VIEWS_CHANGED, fn);
    }

    onActiveViewAdded(fn) {
        this.on(EVT_ACTIVE_VIEW_ADDED, fn);
    }

    onActiveViewsChanged(fn) {
        this.on(EVT_ACTIVE_VIEWS_CHANGED, fn);
    }

    end() {
        this.removeAllListeners(EVT_VIEW_ADDED);
    }

}

export default Region;








