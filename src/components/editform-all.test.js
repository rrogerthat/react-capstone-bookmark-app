import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import store from '../store';

import EditFormAll from './editform-all';

describe('<EditFormAll />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><EditFormAll /></Provider>);
    });
	
});