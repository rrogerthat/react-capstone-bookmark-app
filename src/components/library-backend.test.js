import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Backend from './library-backend';
import {Provider} from 'react-redux';
import store from '../store';

describe('<Backend />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Backend /></Provider>);
    });

    // it('Renders the buttons initially', () => {
    //     const wrapper = mount(<Provider store={store}><Router><Backend /></Router></Provider>);
    //     expect(wrapper.find('button').at(0).hasClass('editBtn')).toEqual(true);  
    // });

	// it('Should fire the onDelete callback when the delete button is clicked', () => {
 //        const callback = jest.fn();
 //        const wrapper = mount(<Provider store={store}><Backend onDelete={callback} /></Provider>);
 //        const btn = wrapper.find('.delBtn');
 //        btn.simulate('click');
 //        expect(callback).toHaveBeenCalled();
 //    });
	
});