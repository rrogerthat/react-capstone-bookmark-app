import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {SubmissionError} from 'redux-form';

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchHtmlData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchHtmlDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_HTML_DATA_SUCCESS = 'FETCH_HTML_DATA_SUCCESS';
export const fetchHtmlDataSuccess = data => ({
    type: FETCH_HTML_DATA_SUCCESS,
    data
});

export const fetchCssData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchCssDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_CSS_DATA_SUCCESS = 'FETCH_CSS_DATA_SUCCESS';
export const fetchCssDataSuccess = data => ({
    type: FETCH_CSS_DATA_SUCCESS,
    data
});

export const fetchJsData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchJsDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_JS_DATA_SUCCESS = 'FETCH_JS_DATA_SUCCESS';
export const fetchJsDataSuccess = data => ({
    type: FETCH_JS_DATA_SUCCESS,
    data
});

export const fetchFeFrameData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchFeFrameDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_FEFRAME_DATA_SUCCESS = 'FETCH_FEFRAME_DATA_SUCCESS';
export const fetchFeFrameDataSuccess = data => ({
    type: FETCH_FEFRAME_DATA_SUCCESS,
    data
});

export const fetchFeOtherData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchFeOtherDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_FEOTHER_DATA_SUCCESS = 'FETCH_FEOTHER_DATA_SUCCESS';
export const fetchFeOtherDataSuccess = data => ({
    type: FETCH_FEOTHER_DATA_SUCCESS,
    data
});

export const fetchBeGeneralData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchBeGeneralDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_BEGENERAL_DATA_SUCCESS = 'FETCH_BEGENERAL_DATA_SUCCESS';
export const fetchBeGeneralDataSuccess = data => ({
    type: FETCH_BEGENERAL_DATA_SUCCESS,
    data
});

export const fetchBeFrameData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchBeFrameDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_BEFRAME_DATA_SUCCESS = 'FETCH_BEFRAME_DATA_SUCCESS';
export const fetchBeFrameDataSuccess = data => ({
    type: FETCH_BEFRAME_DATA_SUCCESS,
    data
});

export const fetchBeOtherData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchBeOtherDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_BEOTHER_DATA_SUCCESS = 'FETCH_BEOTHER_DATA_SUCCESS';
export const fetchBeOtherDataSuccess = data => ({
    type: FETCH_BEOTHER_DATA_SUCCESS,
    data
});

export const fetchTestingData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchTestingDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_TESTING_DATA_SUCCESS = 'FETCH_TESTING_DATA_SUCCESS';
export const fetchTestingDataSuccess = data => ({
    type: FETCH_TESTING_DATA_SUCCESS,
    data
});

export const fetchOtherData = (category) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/${category}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchOtherDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_OTHER_DATA_SUCCESS = 'FETCH_OTHER_DATA_SUCCESS';
export const fetchOtherDataSuccess = data => ({
    type: FETCH_OTHER_DATA_SUCCESS,
    data
});

export const postProtectedData = (values) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/entry`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
};

export const fetchDeleteData = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/entry/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then((data) => dispatch(fetchDeleteDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const FETCH_DELETE_DATA_SUCCESS = 'FETCH_DELETE_DATA_SUCCESS';
export const fetchDeleteDataSuccess = data => ({
    type: FETCH_DELETE_DATA_SUCCESS,
    data
});

export const editProtectedData = (values, id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/items/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        }
    })

}