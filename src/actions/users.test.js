import registerUser from './users';

describe('Set username action', () => {
	const user = {
		firstName: 'Roger',
		lastName: 'Hwang',
		username: 'rogerh',
		password: '123456789'
	}
	it('Should pass user registration info to action', () => {
		// const action = registerUser('user');
		// expect(action.type).toEqual(SET_AUTH_TOKEN);
		// expect(action.authToken).toEqual('123456789');
	});

});