import React from 'react';
import {shallow, mount} from 'enzyme';

import NewFormAll from './newform-all';
import {Provider} from 'react-redux';
import store from '../store';

describe('<NewFormAll />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><NewFormAll /></Provider>);
    });
	
});