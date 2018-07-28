import React from 'react';
import {shallow, mount} from 'enzyme';

import About from './landing-about';

describe('<About />', () => {
    it('Renders without crashing', () => {
        shallow(<About />);
    });

    it('Renders the sections initially', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('section').at(0).hasClass('app-about')).toEqual(true);  
        expect(wrapper.find('section').at(1).hasClass('app-about')).toEqual(true); 
        expect(wrapper.find('section').at(2).hasClass('app-about')).toEqual(true); 
    });
	
});