import React from 'react';
import {shallow, mount} from 'enzyme';

import {Navbar} from './newform-navbar';	//import the unconnected component

describe('<Navbar />', () => {
    it('Renders without crashing', () => {
        shallow(<Navbar />);
    });

    it('Renders the button initially', () => {
        const wrapper = mount(<Navbar loggedIn={true} />);	//set prop to true so doesn't redirect to new page
        expect(wrapper.find('button').hasClass('logout-btn')).toEqual(true);  
    });

	it('Should fire the logOut callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Navbar loggedIn={true} dispatch={callback} />);
        const btn = wrapper.find('.logout-btn');
        btn.simulate('click');
        expect(callback).toHaveBeenCalled();
    });
	
});