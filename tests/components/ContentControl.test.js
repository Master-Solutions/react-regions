import React from 'react';
import { shallow, mount } from 'enzyme';

import ContentControl from '../../src/components/hosts/ContentControl';
import RegionRegistry from '../../src/RegionRegistry';
import ViewRegistry from '../../src/ViewRegistry';

import {inlineView, ComponentView} from "../utils/testViews";

const REGION_NAME = 'TestRegion';

const helloView = () => { return <h1>Hello</h1> };

describe('<ContentControl />', () => {
    let regionRegistry;
    let viewRegistry;
    let context;

    beforeEach(() => {
        regionRegistry = new RegionRegistry();
        viewRegistry = new ViewRegistry();
        context = {regionRegistry: regionRegistry, viewRegistry: viewRegistry};
    });

    it('can use as a region', () => {
        const render = () => shallow(<ContentControl regionName={REGION_NAME}/>, {context: context});
        expect(render).not.toThrow();
    });

    it('auto populates existing view', () => {
        viewRegistry.registerViewInRegion(REGION_NAME, helloView);
        const wrapper = mount(<ContentControl regionName={REGION_NAME} />, {context: context});
        expect(wrapper.html()).toBe('<div><h1>Hello</h1></div>');
    });

    it('auto populates dynamic view', () => {
        const wrapper = mount(<ContentControl regionName={REGION_NAME} />, {context: context});
        expect(wrapper.html()).toBe('<div></div>');
        viewRegistry.registerViewInRegion(REGION_NAME, helloView);
        wrapper.update();
        expect(wrapper.html()).toBe('<div><h1>Hello</h1></div>');
    });

    it('populates component view', () => {
        viewRegistry.registerViewInRegion(REGION_NAME, ComponentView);
        const wrapper = mount(<ContentControl regionName={REGION_NAME} />, {context: context});
        expect(wrapper.html()).toBe('<div><h1>Component</h1></div>');
    });

    it('populates views with props', () => {
        viewRegistry.registerViewInRegion(REGION_NAME, inlineView, {content: 'Test1'});
        const wrapper = mount(<ContentControl regionName={REGION_NAME} />, {context: context});
        expect(wrapper.html()).toBe('<div><h1>Test1</h1></div>');
    });

});

