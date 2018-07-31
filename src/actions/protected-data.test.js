import {fetchHtmlDataSuccess, FETCH_HTML_DATA_SUCCESS} from './protected-data';
import {fetchJsDataSuccess, FETCH_JS_DATA_SUCCESS} from './protected-data';
import {fetchBeGeneralDataSuccess, FETCH_BEGENERAL_DATA_SUCCESS} from './protected-data';
import {fetchOtherDataSuccess, FETCH_OTHER_DATA_SUCCESS} from './protected-data';
import {fetchPostDataSuccess, FETCH_POST_DATA_SUCCESS} from './protected-data';
import {fetchDeleteDataSuccess, FETCH_DELETE_DATA_SUCCESS} from './protected-data';
import {fetchEditDataSuccess, FETCH_EDIT_DATA_SUCCESS} from './protected-data';

describe('GET request action', () => {
    it('Should return the fetchHtmlDataSuccess action', () => {
        const bookmark = {
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        };
        const action = fetchHtmlDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_HTML_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
    });

    it('Should return the fetchJsDataSuccess action', () => {
        const bookmark = {
            created: '5b5a6f06e7c74021c814a4f1',
            category: 'Javscript',
            link: 'https://www.w3schools.com',
            description: 'Obj.assign',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        };
        const action = fetchJsDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_JS_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
    });

    it('Should return the fetchBeGeneralDataSuccess action', () => {
        const bookmark = {
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Back-end General',
            link: 'https://www.w3schools.com',
            description: 'Using Node',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        };
        const action = fetchBeGeneralDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_BEGENERAL_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
    });

    it('Should return the fetchOtherDataSuccess action', () => {
        const bookmark = {
	        created: '5b5a6f06e7c74021c814a4f9',
	        category: 'Other',
	        link: 'https://www.w3schools.com',
	        description: 'Interview questions',
	        importance: 'Needs review',
	        knowledge: 'Intermediate'
    	};
        const action = fetchOtherDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_OTHER_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
    });

});

describe('POST request action', () => {
    it('Should return the fetchPostDataSuccess action', () => {
        const bookmark = {
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        };
        const action = fetchPostDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_POST_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
    });
});	

describe('DELETE request action', () => {
    it('Should return the fetchDeleteDataSuccess action', () => {
        const bookmark = {
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        };
        const action = fetchDeleteDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_DELETE_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
    });
});

describe('EDIT request action', () => {
    it('Should return the fetchEditDataSuccess action', () => {
        const bookmark = {
            created: '5b5a6f06e7c74021c814a4f9',
            category: 'Front-end HTML',
            link: 'https://www.w3schools.com',
            description: 'Using Headers',
            importance: 'Needs review',
            knowledge: 'Intermediate'
        };
        const action = fetchEditDataSuccess(bookmark);
        expect(action.type).toEqual(FETCH_EDIT_DATA_SUCCESS);
        expect(action.data.category).toEqual(bookmark.category);
        expect(action.data.link).toEqual(bookmark.link);
        expect(action.data.description).toEqual(bookmark.description);
        expect(action.data.created).toEqual(bookmark.created);
    });
});