import React from 'react';
import asRegionAdapter from "../../utils/asRegionAdapter";
import ItemsControlRegionAdapter from "../../adapters/ItemsControlRegionAdapter";

export default asRegionAdapter(
    new ItemsControlRegionAdapter,
    [],
    function() {
        const renderView = (view) => {
            const View = view.component;
            return <li><View /></li>
        };

        return <ul>{this.state.views.map(renderView)}</ul>;
    }
);






