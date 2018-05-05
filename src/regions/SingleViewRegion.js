import Region from "../Region";

class SingleViewRegion extends  Region {

    activateView(view) {
        const currentView = this.activeViews[0];
        if (currentView && currentView !== view && this.views.contains(view))
            this.deactivateView(view);
        super.activateView(view);
    }

}

export default SingleViewRegion;








