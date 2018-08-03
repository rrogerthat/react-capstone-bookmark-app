import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {Redirect} from 'react-router-dom';
import store from '../store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Navbar} from './library-navbar';

describe('<Navbar />', () => {
    it('Renders without crashing', () => {
        shallow(<Navbar />);
    });

    it('Redirects page when props is false', () => {
        const wrapper = shallow(<Navbar loggedIn={false} />);
        expect(wrapper.containsMatchingElement(<Redirect to="/" />)).toEqual(true)
    });

	it('Should fire the logOut callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Navbar loggedIn={true} dispatch={callback} currentUser={{id: "5b4d342719dcd418aca4942e", username: "rogerh", firstName: "Roger", lastName: "Hwang"}} />);
        const btn = wrapper.find('.logout-btn');
        btn.simulate('click');
        expect(callback).toHaveBeenCalled();
    });


});