export const ADD_FRONTEND = 'ADD_FRONTEND';
export const addFrontend = frontend => ({
    type: ADD_FRONTEND,
    frontend
});

export const ADD_BACKEND = 'ADD_BACKEND';
export const addBackend = backend => ({
    type: ADD_BACKEND,
    backend
});

export const ADD_TESTING = 'ADD_TESTING';
export const addTesting = testing => ({
    type: ADD_TESTING,
    testing
});

export const ADD_OTHER = 'ADD_OTHER';
export const addOther = other => ({
    type: ADD_OTHER,
    other
});