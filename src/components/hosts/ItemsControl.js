import React from 'react';
import asRegionAdapter from "../../utils/asRegionAdapter";
import ItemsControlRegionAdapter from "../../adapters/ItemsControlRegionAdapter";

export default asRegionAdapter(
    new ItemsControlRegionAdapter,
    [],
    function() {
        const renderView = (view, index) => {
            const key = view.name ? view.name : index;
            return view.toComponent({key: key});
        };

        return this.state.views.map(renderView);
    }
);






