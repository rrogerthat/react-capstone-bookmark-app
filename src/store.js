import {createStore} from 'redux';

import {bookmarkReducer} from './reducers';

export default createStore(bookmarkReducer);