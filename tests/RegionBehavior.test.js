import React, {Component} from 'react';
import { shallow, mount } from 'enzyme';

import Region from '../src/Region';
import RegionBehavior from '../src/RegionBehavior';


describe('RegionBehavior', () => {
    let region;
    let behavior;

    beforeEach(() => {
        region = new Region();
        behavior = new RegionBehavior();
    });

    describe('#attach', () => {

        it('throws if no region', () => {
            expect(() => {
                behavior.attach();
            }).toThrow('Behavior cannot be attached to undefined region');
        });

        it('can attach to a region', () => {
            behavior.attach(region);
            expect(behavior.region).toBe(region);
            expect(region.behaviors[0]).toBe(behavior);
        });

        it('onAttach called on successful attach', () => {
            behavior.onAttach = jest.fn();
            behavior.attach(region);
            expect(behavior.onAttach).toBeCalled();
        });

    });

});

