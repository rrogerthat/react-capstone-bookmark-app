import React from 'react';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Frontend} from './library-frontend';
import {Provider} from 'react-redux';
import store from '../store';

describe('<Frontend />', () => {
    it('Renders without crashing', () => {
        shallow(<Frontend />);
    });

    it('Should fire the onDelete callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Frontend 
        htmlSect = {[{
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]} 
        cssSect = {[{
            created: '5b5a6f06e7c74021c814a4f0',
            category: 'Front-end CSS',
            link: 'https://www.w3schools.com',
            description: 'Hover tricks',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]} 
        jsSect = {[{
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Javscript',
            link: 'https://www.w3schools.com',
            description: 'Obj.assign',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]} 
        feframeSect = {[{
            created: '5b5a6f06e7c74021c814a4f2',
            category: 'Front-end Frameworks & Libraries',
            link: 'https://www.w3schools.com',
            description: 'Starting out on React',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]}	
        feOtherSect = {[{
            created: '5b5a6f06e7c74021c814a4f3',
            category: 'Front-end Other',
            link: 'https://www.w3schools.com',
            description: 'Which framework to use',
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
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        },
        {
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Various tags',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }
    ];
    const wrapper = shallow(<Frontend htmlSect={bookmarks} />);
    const items = wrapper.find('.eachSec');     //under this class creates an UL for each bookmark
    expect(items.length).toEqual(bookmarks.length); 
  });
	
});