import reducer from './protected-data';
import {fetchHtmlDataSuccess, fetchJsDataSuccess, fetchTestingDataSuccess, 
fetchBeGeneralDataSuccess,	fetchOtherDataSuccess} from '../actions/protected-data';
import {fetchDeleteData, fetchDeleteDataSuccess} from '../actions/protected-data';

describe('fetch state through reducer', () => {
    // Set up some dummy data
     const htmlbooks = 
    	{bookmarks: [{
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]};
     const jsbooks = 
    	{bookmarks: [{
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Javscript',
            link: 'https://www.w3schools.com',
            description: 'Obj.assign',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]};
     const testingbooks = 
    	{bookmarks: [{
	        created: '5b5a6f06e7c74021c814a4f2',
	        category: 'Testing',
	        link: 'https://www.w3schools.com',
	        description: 'Using Chai',
	        importance: 'Needs review',
	        knowledge: 'Intermediate'
    	}, 
    	{
            created: '5b5a6f06e7c74021c814a4f3',
            category: 'Testing',
            link: 'https://www.w3schools.com',
            description: 'How to use Chai',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]};
     const otherbooks = 
    	{bookmarks: [{
	        created: '5b5a6f06e7c74021c814a4f4',
	        category: 'Other',
	        link: 'https://www.w3schools.com',
	        description: 'Interview questions',
	        importance: 'Needs review',
	        knowledge: 'Intermediate'
    	}]};
     const backendbooks = 
    	{bookmarks: [{
            created: '5b5a6f06e7c74021c814a4f5',
            category: 'Back-end General',
            link: 'https://www.w3schools.com',
            description: 'Using Node',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]};
     const cssbooks = 
    	{bookmarks: [{
            created: '5b5a6f06e7c74021c814a4f0',
            category: 'Front-end CSS',
            link: 'https://www.w3schools.com',
            description: 'Hover tricks',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        }]};

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
		    htmldata: {bookmarks: []},
		    cssdata: {bookmarks: []},
		    jsdata: {bookmarks: []},
		    feframedata: {bookmarks: []},
		    feotherdata: {bookmarks: []},
		    begeneraldata: {bookmarks: []},
		    beframedata: {bookmarks: []},
		    beotherdata: {bookmarks: []},
		    testingdata: {bookmarks: []},
		    otherdata: {bookmarks: []},
		    error: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('Update state through reducer', () => {

        it('Should GET lists when state updated thru action', () => {
            let state; 

            state = reducer(state, fetchHtmlDataSuccess(htmlbooks));
            let state2 = reducer(state, fetchJsDataSuccess(jsbooks));
            let state3 = reducer(state2, fetchTestingDataSuccess(testingbooks));
            let state4 = reducer(state3, fetchOtherDataSuccess(otherbooks));
            let state5 = reducer(state4, fetchBeGeneralDataSuccess(backendbooks));

            expect(state5).toEqual({
                htmldata: htmlbooks,
			    cssdata: {bookmarks: []},
			    jsdata: jsbooks,
			    feframedata: {bookmarks: []},
			    feotherdata: {bookmarks: []},
			    begeneraldata: backendbooks,
			    beframedata: {bookmarks: []},
			    beotherdata: {bookmarks: []},
			    testingdata: testingbooks,
			    otherdata: otherbooks,
			    error: null
            });
        });

        it('Should DELETE item when state updated thru action', () => {
        	let state =
	        	{
	                htmldata: htmlbooks,
				    cssdata: cssbooks,
				    jsdata: jsbooks,
				    feframedata: {bookmarks: []},
				    feotherdata: {bookmarks: []},
				    begeneraldata: backendbooks,
				    beframedata: {bookmarks: []},
				    beotherdata: {bookmarks: []},
				    testingdata: testingbooks,
				    otherdata: otherbooks,
				    error: null
	            };

        	let newState = reducer(state, 
        	fetchDeleteDataSuccess({url: `http://localhost:8080/items/entry/${cssbooks.bookmarks[0].created}`}));

            expect(newState).toEqual({
                htmldata: htmlbooks,
			    cssdata: {bookmarks: []},
			    jsdata: jsbooks,
			    feframedata: {bookmarks: []},
			    feotherdata: {bookmarks: []},
			    begeneraldata: backendbooks,
			    beframedata: {bookmarks: []},
			    beotherdata: {bookmarks: []},
			    testingdata: testingbooks,
			    otherdata: otherbooks,
			    error: null
            });

        });

    });
//post and edit gets updated in action only
});