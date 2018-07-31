import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';
import {browserRouter as Router} from 'react-router-dom';

import {Editform} from './editform-entryform';

describe('<Editform />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Editform /></Provider>);
    });

    it('Renders the entry form form initially', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Editform handleSubmit={callback} />);
        expect(wrapper.find('form').hasClass('entry-form')).toEqual(true);  
    });

	it('Should fire the handleSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Editform handleSubmit={callback} />);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });
	
});