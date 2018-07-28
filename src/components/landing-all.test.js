import React from 'react';
import {shallow, mount} from 'enzyme';

import LandingAll from './landing-all';
import {Provider} from 'react-redux';
import store from '../store';

describe('<LandingAll />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><LandingAll /></Provider>);
    });
	
});