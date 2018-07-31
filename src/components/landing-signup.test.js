import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import Signup from './landing-loginform';

describe('<Signup />', () => {
    it('Renders without crashing', () => {
        shallow(<Signup />);
    });

	it('Should fire the handleSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<Provider store={store}><Signup handleSubmit={callback} /></Provider>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });
	
});