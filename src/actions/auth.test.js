import {setAuthToken, SET_AUTH_TOKEN, authSuccess, AUTH_SUCCESS} from './auth';

describe('Set login action', () => {
	it('Should store authToken action', () => {
		const action = setAuthToken('123456789');
		expect(action.type).toEqual(SET_AUTH_TOKEN);
		expect(action.authToken).toEqual('123456789');
	});
	it('Should store user action', () => {
		const action = authSuccess('rogerh');
		expect(action.type).toEqual(AUTH_SUCCESS);
		expect(action.currentUser).toEqual('rogerh');
	});
});