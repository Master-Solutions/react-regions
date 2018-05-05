import React, {Component} from 'react';
import TargetControlWrapper from "../components/TargetControlWrapper";

export default function withRegionAdapter(regionAdapter, behaviors = [], renderTargetControl) {

    const Adapter = class extends TargetControlWrapper {

        render() {
            return renderTargetControl.bind(this)();
        }

    };

    Adapter.defaultProps = {
        regionAdapter: regionAdapter
    };

    return Adapter;

}

