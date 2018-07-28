import React from 'react';
import {shallow, mount} from 'enzyme';

import LibraryAll from './library-all';
import {Provider} from 'react-redux';
import store from '../store';

describe('<LibraryAll />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><LibraryAll /></Provider>);
    });
	
});