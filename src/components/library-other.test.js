import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Other from './library-other';
import {Provider} from 'react-redux';
import store from '../store';

describe('<Other />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider store={store}><Other /></Provider>);
    });

	
});