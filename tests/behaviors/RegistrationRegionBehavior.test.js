import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';

import Region from '../../src/Region';
import RegionRegistry from '../../src/RegionRegistry';
import RegistrationRegionBehavior from '../../src/behaviors/RegistrationRegionBehavior';

const REGION_NAME = 'TestRegion';

describe('RegionBehavior', () => {
    let region;
    let behavior;
    let regionRegistry;

    beforeEach(() => {
        region = new Region();
        region.setName(REGION_NAME);
        regionRegistry = new RegionRegistry();
        behavior = new RegistrationRegionBehavior(regionRegistry);
    });

    it('registers region in registry', () => {
        behavior.attach(region);
        expect(regionRegistry.regions[REGION_NAME]).toBe(region);
    });


});

