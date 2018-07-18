import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';

import {bookmarkReducer} from './reducers';
import protectedDataReducer from './reducers/protected-data';	//USE THIS INSTEAD?

const store = createStore(
	combineReducers ({
		form: formReducer,
		auth: authReducer,
		protectedData: bookmarkReducer,
		protectedData2: protectedDataReducer	//USE THIS INSTEAD?
	}),
	applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;