import {
    FETCH_HTML_DATA_SUCCESS,
    FETCH_CSS_DATA_SUCCESS,
    FETCH_JS_DATA_SUCCESS,
    FETCH_FEFRAME_DATA_SUCCESS,
    FETCH_FEOTHER_DATA_SUCCESS,
    FETCH_BEGENERAL_DATA_SUCCESS,
    FETCH_BEFRAME_DATA_SUCCESS,
    FETCH_BEOTHER_DATA_SUCCESS,
    FETCH_TESTING_DATA_SUCCESS,
    FETCH_OTHER_DATA_SUCCESS,
    FETCH_DELETE_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

const initialState = {
    htmldata: '',
    cssdata: '',
    jsdata: '',
    feframedata: '',
    feotherdata: '',
    begeneraldata: '',
    beframedata: '',
    beotherdata: '',
    testingdata: '',
    otherdata: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_HTML_DATA_SUCCESS) {
        return Object.assign({}, state, {
            htmldata: action.data,
            error: null
        });
    } else if (action.type === FETCH_CSS_DATA_SUCCESS) {
        return Object.assign({}, state, {
            cssdata: action.data,
            error: null
        });
    } else if (action.type === FETCH_JS_DATA_SUCCESS) {
        return Object.assign({}, state, {
            jsdata: action.data,
            error: null
        });
    } else if (action.type === FETCH_FEFRAME_DATA_SUCCESS) {
        return Object.assign({}, state, {
            feframedata: action.data,
            error: null
        });
    } else if (action.type === FETCH_FEOTHER_DATA_SUCCESS) {
        return Object.assign({}, state, {
            feotherdata: action.data,
            error: null
        });
    } else if (action.type === FETCH_BEGENERAL_DATA_SUCCESS) {
        return Object.assign({}, state, {
            begeneraldata: action.data,
            error: null
        });
    } else if (action.type === FETCH_BEFRAME_DATA_SUCCESS) {
        return Object.assign({}, state, {
            beframedata: action.data,
            error: null
        });
    } else if (action.type === FETCH_BEOTHER_DATA_SUCCESS) {
        return Object.assign({}, state, {
            beotherdata: action.data,
            error: null
        });
    } else if (action.type === FETCH_TESTING_DATA_SUCCESS) {
        return Object.assign({}, state, {
            testingdata: action.data,
            error: null
        });
    } else if (action.type === FETCH_OTHER_DATA_SUCCESS) {
        return Object.assign({}, state, {
            otherdata: action.data,
            error: null
        });
    } else if (action.type === FETCH_DELETE_DATA_SUCCESS) {
        return Object.assign({}, state, {
            htmldata: state.htmldata.bookmarks.filter(
                item => {
                    console.log(item.created !== action.data.url.substr(34, 57));
                    return item.created !== action.data.url.substr(34, 57);
                }
            ),
            error: null
        });
    } 

    else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;


}
