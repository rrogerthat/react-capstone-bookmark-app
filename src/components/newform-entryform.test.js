import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Entryform from './newform-entryform';

describe('<Entryform />', () => {
    it('Renders without crashing', () => {
        shallow(<Entryform />);
    });

    it('Renders the entry form form initially', () => {
        const wrapper = mount(<Provider store={store}><Router><Entryform /></Router></Provider>);
        expect(wrapper.find('form').hasClass('entry-form')).toEqual(true);  
    });

	it('Should fire the handleSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<Provider store={store}><Router><Entryform handleSubmit={callback} /></Router></Provider>);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });
	
});