import React from 'react';
import {shallow, mount} from 'enzyme';

import {Other} from './library-other';

describe('<Other />', () => {
    it('Renders without crashing', () => {
        shallow(<Other />);
    });

    it('Should fire the onDelete callback when the button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<Other  
        otherSect = {[{
	        created: '5b5a6f06e7c74021c814a4f9',
	        category: 'Other',
	        link: 'https://www.w3schools.com',
	        description: 'Interview questions',
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
            category: 'Other',
            link: 'https://www.w3schools.com',
            description: 'Interview questions',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        },
        {
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Other',
            link: 'https://www.w3schools.com',
            description: 'CS Fundamentals',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }
    ];
    const wrapper = shallow(<Other otherSect={bookmarks} />);
    const items = wrapper.find('.eachSec');     //under this class creates an UL for each bookmark
    expect(items.length).toEqual(bookmarks.length); 
  });
	
});