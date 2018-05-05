import React, {Component} from 'react';
import TargetControlWrapper from "../components/TargetControlWrapper";

export default function asRegionTarget(targetControl, regionAdapter) {

    class RegionTarget extends TargetControlWrapper {}

    RegionTarget.defaultProps = {
        targetControl: targetControl,
        regionAdapter: regionAdapter
    };

    return RegionTarget;
}

