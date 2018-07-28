import React from 'react';
import {shallow, mount} from 'enzyme';

import Selection from './library-selection';

describe('<Selection />', () => {
    it('Renders without crashing', () => {
        shallow(<Selection />);
    });

    it('Renders the buttons initially', () => {
        const wrapper = shallow(<Selection />);
        expect(wrapper.find('button').at(0).hasClass('category-btn')).toEqual(true);  
        expect(wrapper.find('button').at(1).hasClass('category-btn')).toEqual(true); 
        expect(wrapper.find('button').at(2).hasClass('category-btn')).toEqual(true); 
        expect(wrapper.find('button').at(3).hasClass('category-btn')).toEqual(true); 
    });
	
});