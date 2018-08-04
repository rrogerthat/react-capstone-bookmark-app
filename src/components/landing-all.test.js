import React from 'react';
import {shallow, mount} from 'enzyme';
import {Redirect} from 'react-router-dom';

import {LandingAll} from './landing-all';

describe('<LandingAll />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingAll />);
    });

    it('Redirects page when props is true', () => {
        const wrapper = shallow(<LandingAll loggedIn={true} />);
        expect(wrapper.containsMatchingElement(<Redirect to='/library' />)).toEqual(true)
    });
	
});