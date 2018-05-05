import React from 'react';
import { shallow, mount } from 'enzyme';
import spyConsole from "../utils/spyConsole";

import RegionManager from '../../src/components/RegionManager';
import Region from '../../src/Region';
import RegionRegistry from '../../src/RegionRegistry';

import ContentControl from '../../src/components/hosts/ContentControl';
import ErrorBoundary from "../utils/ErrorBoundary";


const REGION1_NAME = 'Test1Region';

describe('<RegionManager />', () => {
    spyConsole();
    let regionRegistry;

    beforeEach(() => {
        regionRegistry = new RegionRegistry();
    });

    it('not throws when empty', () => {
        expect(() => shallow(<RegionManager/>)).not.toThrow();
    });

    it('renders children', () => {
        const wrapper = mount(
            <RegionManager>
                <div>
                    <p>Test1</p>
                    <p>Test2</p>
                </div>
                <div>Test3</div>
            </RegionManager>
        );
        expect(wrapper.html('<div><div><p>Test1</p><p>Test2</p></div><div>Test3</div></div>')).toBeTruthy();
    });

    // it('auto registers child region', () => {
    //     const wrapper = mount(
    //         <RegionManager regionRegistry={regionRegistry}>
    //             <TargetControlWrapper regionName={REGION1_NAME} />
    //         </RegionManager>
    //     );
    //     const region = regionRegistry.regionNames[REGION1_NAME];
    //     expect(region).toBeInstanceOf(Region);
    //     expect(region.name).toBe(REGION1_NAME);
    // });



    // it('throws if multiple regionNames with the same name', () => {
    //     // handling component error with error boundary
    //     expect(() => mount(
    //         <RegionManager>
    //             <ContentControl regionName={REGION1_NAME} />
    //             <ContentControl regionName={REGION1_NAME} />
    //         </RegionManager>
    //     )).toThrow(/already exists/);
    //
    //
    //     // const wrapper = mount(
    //     //     <ErrorBoundary>
    //     //         <RegionManager>
    //     //             <TargetControlWrapper regionName={REGION1_NAME} />
    //     //             <TargetControlWrapper regionName={REGION1_NAME} />
    //     //         </RegionManager>
    //     //     </ErrorBoundary>
    //     // );
    //     // expect(wrapper.text()).toMatch(/already exists/);
    // });


});

