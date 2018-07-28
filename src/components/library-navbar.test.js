import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './library-navbar';

describe('<Navbar />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Navbar /></Provider>);
    });

	// it('Should fire the logOut callback when the button is clicked', () => {
 //        const callback = jest.fn();
 //        const wrapper = mount(<Provider store={store}><Router><Navbar logOut={callback} /></Router></Provider>);
 //        const btn = wrapper.find('.logout-btn');
 //        btn.simulate('click');
 //        expect(callback).toHaveBeenCalled();
 //    });

	// it('Renders some feedback', () => {
	//     let TEST_FEEDBACK = 'hello';

	//     let wrapper = mount(<Provider store={store}><Router><Navbar loggedIn={TEST_FEEDBACK} /></Router></Provider>);
	//     expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
	// });
	
});