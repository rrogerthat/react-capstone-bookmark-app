import reducer from './auth';

import {setAuthToken, authSuccess} from '../actions/auth';

describe('fetch state through reducer', () => {

	it('Should update authToken when state updated thru action', () => {
        let state; 

        state = reducer(state, setAuthToken('123456789'));

        expect(state).toEqual({
        	authToken: '123456789',
			currentUser: null,
			error: null,
			loading: false
        })
	});

	it('Should update current user when state updated thru action', () => {
        let state; 

        state = reducer(state, authSuccess('rogerh'));

        expect(state).toEqual({
        	authToken: null,
			currentUser: 'rogerh',
			error: null,
			loading: false
        })
	});

});