import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';

import ViewRegistry from '../src/ViewRegistry';
import { inlineView, ComponentView } from "./utils/testViews";

const REGION_NAME = 'TestRegion';

describe('ViewRegistry', () => {
    let viewRegistry;

    beforeEach(() => {
        viewRegistry = new ViewRegistry();
    });

    describe('#registerViewInRegion', () => {

        it('can register views in region', () => {
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            viewRegistry.registerViewInRegion(REGION_NAME, ComponentView);

            const regionViews = viewRegistry.regionViews[REGION_NAME];
            expect(regionViews.length).toBe(2);
            expect(regionViews[0].component).toBe(inlineView);
            expect(regionViews[1].component).toBe(ComponentView);
        });

        it('can register same views in region', () => {
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);

            const regionViews = viewRegistry.regionViews[REGION_NAME];
            expect(regionViews.length).toBe(2);
        });

    });

    describe('#getRegionViews', () => {

        it('can get region views', () => {
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            expect(viewRegistry.getRegionViews(REGION_NAME).length).toBe(2);
        });

        it('empty result if no such region', () => {
            expect(viewRegistry.getRegionViews('NoRegion').length).toBe(0);
        });

    });

    describe('#onViewRegistered', () => {

        it('can subscribe for registration event', () => {
            let spy = 0;
            viewRegistry.onViewRegistered((regionName, view) => {
                spy += 1;
            });
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            viewRegistry.registerViewInRegion(REGION_NAME, inlineView);
            expect(spy).toBe(2);
        });

    });

});

