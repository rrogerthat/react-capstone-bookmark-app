import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import Loginform from './landing-loginform';

describe('<Loginform />', () => {
    it('Renders without crashing', () => {
        shallow(<Loginform />);
    });

    it('Renders the login form initially', () => {
        const wrapper = mount(<Provider store={store}><Loginform /></Provider>);
        expect(wrapper.find('form').hasClass('login-form')).toEqual(true);  
    });

	it('Should fire the handleSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<Provider store={store}><Loginform handleSubmit={callback} /></Provider>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });
	
});