import React from 'react';
import {shallow, mount} from 'enzyme';

import {Navbar} from './newform-navbar';

describe('<Navbar />', () => {
    it('Renders without crashing', () => {
        shallow(<Navbar />);
    });

    it('Renders the button initially', () => {
        const wrapper = mount(<Navbar loggedIn={true} />);
        console.log(wrapper.debug())
        expect(wrapper.find('button').hasClass('logout-btn')).toEqual(true);  
    });

	// it('Should fire the logOut callback when the button is clicked', () => {
 //        const callback = jest.fn();
 //        const wrapper = mount(<Provider store={store}><Router><Navbar logOut={callback} /></Router></Provider>);
 //        const btn = wrapper.find('button');
 //        btn.simulate('click');
 //        expect(callback).toHaveBeenCalled();
 //    });
	
});