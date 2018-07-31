import React from 'react';
import {shallow, mount} from 'enzyme';

import {Testing} from './library-testing';


describe('<Testing />', () => {
    it('Renders without crashing', () => {
        shallow(<Testing />);
    });

    it('Should fire the onDelete callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Testing 
	    testingSect = {[{
	        created: '5b5a6f06e7c74021c814a4f9',
	        category: 'Testing',
	        link: 'https://www.w3schools.com',
	        description: 'Using Chai',
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
            category: 'Testing',
            link: 'https://www.w3schools.com',
            description: 'How to use Chai',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        },
        {
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Testing',
            link: 'https://www.w3schools.com',
            description: 'Mocha tips',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }
    ];
    const wrapper = shallow(<Testing testingSect={bookmarks} />);
    const items = wrapper.find('.eachSec');     //under this class creates an UL for each bookmark
    expect(items.length).toEqual(bookmarks.length); 
  });
	
});