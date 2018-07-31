import React from 'react';
import {shallow, mount} from 'enzyme';

import {Backend} from './library-backend';
import {Provider} from 'react-redux';
import store from '../store';

describe('<Backend />', () => {
    it('Renders without crashing', () => {
        shallow(<Backend />);
    });

    it('Should fire the onDelete callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Backend 
        beGeneralSect = {[{
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Back-end General',
            link: 'https://www.w3schools.com',
            description: 'Using Node',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]} 
        beFrameSect = {[{
            created: '5b5a6f06e7c74021c814a4f0',
            category: 'Back-end Frameworks & Libraries',
            link: 'https://www.w3schools.com',
            description: 'Using back-end libraries',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]} 
        beOtherSect = {[{
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Back-end Other',
            link: 'https://www.w3schools.com',
            description: 'Which database to use',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]} 
        dispatch = {callback} />);
        const btn = wrapper.find('.delBtn').at(0);
        btn.simulate('click');
        expect(callback).toHaveBeenCalled();
    });

  it('Renders a list of bookmarks from state', () => {
    const bookmarks = 
    [
        {   
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Back-end General',
            link: 'https://www.w3schools.com',
            description: 'Using Node',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        },
        {
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Back-end General',
            link: 'https://www.w3schools.com',
            description: 'Intro to Mongo',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }
    ];
    const wrapper = shallow(<Backend beGeneralSect={bookmarks} />);
    const items = wrapper.find('.eachSec');     //under this class creates an UL for each bookmark
    expect(items.length).toEqual(bookmarks.length); //length is 2
  });
	
});