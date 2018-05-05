import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';

import Region from '../../src/Region';
import ViewRegistry from '../../src/ViewRegistry';
import AutoPopulateRegionBehavior from '../../src/behaviors/AutoPopulateRegionBehavior';
import { inlineView, ComponentView } from "../utils/testViews";

const REGION_NAME = 'TestRegion';

describe('RegionBehavior', () => {
    let region;
    let behavior;
    let viewRegistry;

    beforeEach(() => {
        region = new Region();
        region.setName(REGION_NAME);
        viewRegistry = new ViewRegistry();
        behavior = new AutoPopulateRegionBehavior(viewRegistry);
    });

    describe('sync views', () => {

        it('existing views', () => {
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            behavior.attach(region);
            expect(region.views.length).toBe(1);
            expect(region.views[0].component).toBe(inlineView);
        });

        it('dynamically added views', () => {
            behavior.attach(region);
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            expect(region.views.length).toBe(1);
            expect(region.views[0].component).toBe(inlineView);
        });

    });

});

