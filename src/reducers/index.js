import {ADD_FRONTEND, ADD_BACKEND, ADD_TESTING, ADD_OTHER} from '../actions';

const initialState = { 
	html: {
		category: 'HTML',
		link: 'https://www.w3schools.com',
		description: 'Using Headers',
		importance: 'Needs review',
		knowledge: 'Intermediate'
	}, 
	css: {
		category: 'CSS',
		link: 'https://www.w3schools.com',
		description: 'Hovering effects',
		importance: 'Review only when needed',
		knowledge: 'Intermediate'
	},
	javascript: {
		category: 'Javascript',
		link: 'https://www.w3schools.com',
		description: 'Using object.assign',
		importance: 'Review occasionally',
		knowledge: 'Intermediate'
	},
	frontLibFramework: {

	},
	frontOther: {

	},
	backGeneral: {
		category: 'Back-end: General',
		link: 'https://developer.mozilla.org/en-US/docs/Web/API/Node',
		description: 'Guide to using Node.js',
		importance: 'Needs review',
		knowledge: 'Beginner'
	},
	backLibFramework: {

	},
	backOther: {

	},
	testing: {
		category: 'Testing',
		link: 'https://mochajs.org/',
		description: 'How to use Mocha',
		importance: 'Needs review',
		knowledge: 'Beginner'
	},
	other: {

	}
};

export const bookmarkReducer = (state=initialState, action) => {
	if (action.type === ADD_FRONTEND) {
		return Object.assign({}, state, action.frontend);
	} else if (action.type === ADD_BACKEND) {
		return Object.assign({}, state, action.backend);
	} else if (action.type === ADD_TESTING) {
		return Object.assign({}, state, action.testing);
	} else if (action.type === ADD_OTHER) {
		return Object.assign({}, state, action.other);
	}

	return state;
};