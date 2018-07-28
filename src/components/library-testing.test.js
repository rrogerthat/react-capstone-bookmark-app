import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Testing from './library-testing';
import {Provider} from 'react-redux';
import store from '../store';

describe('<Testing />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Testing /></Provider>);
    });

	
});