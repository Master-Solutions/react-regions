import React from 'react';
import { shallow, mount } from 'enzyme';

import ItemsControl from '../../src/components/hosts/ItemsControl';
import RegionRegistry from '../../src/RegionRegistry';
import ViewRegistry from '../../src/ViewRegistry';


const REGION_NAME = 'TestRegion';

const helloView = () => { return <h1>Hello</h1> };
const worldView = () => { return <h1>World</h1> };

describe('<ItemsControl />', () => {
    let regionRegistry;
    let viewRegistry;
    let context;

    beforeEach(() => {
        regionRegistry = new RegionRegistry();
        viewRegistry = new ViewRegistry();
        context = {regionRegistry: regionRegistry, viewRegistry: viewRegistry};
    });

    it('can use as a region', () => {
        const render = () => shallow(<ItemsControl regionName={REGION_NAME}/>, {context: context});
        expect(render).not.toThrow();
    });

    it('auto populates existing view', () => {
        viewRegistry.registerViewInRegion(REGION_NAME, helloView);
        const wrapper = mount(<ItemsControl regionName={REGION_NAME} />, {context: context});
        expect(wrapper.html()).toBe('<h1>Hello</h1>');
    });

    it('auto populates dynamic view', () => {
        const wrapper = mount(<ItemsControl regionName={REGION_NAME} />, {context: context});
        viewRegistry.registerViewInRegion(REGION_NAME, worldView);
        wrapper.update();
        expect(wrapper.html()).toBe('<h1>World</h1>');
    });

});

