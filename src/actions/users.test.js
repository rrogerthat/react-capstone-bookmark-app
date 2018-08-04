import {registerUser} from './users';
import {API_BASE_URL} from '../config';

describe('Set username action', () => {

	it('Should make fetch call with user input', () => {
		const user = {
			'firstName': 'Roger',
			'lastName': 'Hwang',
			'username': 'rogerh',
			'password': '123456789'
		}

        global.fetch = jest.fn().mockImplementation(() =>       //api request thru fetch (MOCK)
            Promise.resolve({
                ok: true,
                json() {
                    return user;	
                }
            })
        );
        const dispatch = jest.fn();
        return registerUser()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users`, {
		        method: 'POST',
		        headers: {'content-type': 'application/json'},
		        body: undefined
    		});
        });

	});

});