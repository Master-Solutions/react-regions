import React from 'react';
import asRegionAdapter from "../../utils/asRegionAdapter";
import ContentControlRegionAdapter from "../../adapters/ContentControlRegionAdapter";

export default asRegionAdapter(
    new ContentControlRegionAdapter,
    [],
    function() {
        const view = this.state.view;
        if (view) {
            return <div>{view.toComponent()}</div>
        }
        return <div></div>;
    }
);









