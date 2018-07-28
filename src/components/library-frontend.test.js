import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Frontend from './library-frontend';
import {Provider} from 'react-redux';
import store from '../store';

describe('<Frontend />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Frontend /></Provider>);
    });

    // it('Renders props correctly', () => {
    //     const wrapper = mount(<Provider store={store}><Router><Frontend htmlSect="datahere" /></Router></Provider>);
    //     expect(wrapper.instance().props.htmlSect).toBe("datahere");
    // });

    // it('Renders the buttons initially', () => {
    //     const wrapper = mount(<Provider store={store}><Router><Frontend /></Router></Provider>);
    //     expect(wrapper.hasClass('twobtns')).toEqual(true);  
    // });

	// it('Should fire the onDelete callback when the delete button is clicked', () => {
 //        const callback = jest.fn();
 //        const wrapper = mount(<Provider store={store}><Router><Frontend onDelete={callback} /></Router></Provider>);
 //        const btn = wrapper.find('.delBtn');
 //        btn.simulate('click');
 //        expect(callback).toHaveBeenCalled();
 //    });
	
});