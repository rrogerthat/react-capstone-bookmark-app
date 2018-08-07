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
    htmldata: {bookmarks: []},
    cssdata: {bookmarks: []},
    jsdata: {bookmarks: []},
    feframedata: {bookmarks: []},
    feotherdata: {bookmarks: []},
    begeneraldata: {bookmarks: []},
    beframedata: {bookmarks: []},
    beotherdata: {bookmarks: []},
    testingdata: {bookmarks: []},
    otherdata: {bookmarks: []},
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
    // Determine the new list of bookmarks (filtered)
    let newHtmlArr = state.htmldata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    });
    let newCssArr = state.cssdata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    });   
    let newJsArr = state.jsdata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    });  
    let newFeframeArr = state.feframedata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    });       
    let newFeotherArr = state.feotherdata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    });  
    let newBegeneralArr = state.begeneraldata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    });  
    let newBeframeArr = state.beframedata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    }); 
    let newBeotherArr = state.beotherdata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    }); 
    let newTestingArr = state.testingdata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    }); 
    let newOtherArr = state.otherdata.bookmarks.filter(item => {
        return item.created !== action.data.url.split('/')[action.data.url.split('/').length - 1];
    }); 

    // Build the new htmldata object. It's a copy of the old one with
    // the old 'bookmarks' array overridden with the new filtered one.
    //Each argument needs to be an object!
    let newHtmldata = Object.assign({}, state.htmldata, {
        bookmarks: newHtmlArr 
    });
    let newCssdata = Object.assign({}, state.cssdata, {
        bookmarks: newCssArr
    });
    let newJsdata = Object.assign({}, state.jsdata, {
        bookmarks: newJsArr
    });    
    let newFeframedata = Object.assign({}, state.feframedata, {
        bookmarks: newFeframeArr
    }); 
    let newFeotherdata = Object.assign({}, state.feotherdata, {
        bookmarks: newFeotherArr
    }); 
    let newBegeneraldata = Object.assign({}, state.begeneraldata, {
        bookmarks: newBegeneralArr
    }); 
    let newBeframedata = Object.assign({}, state.beframedata, {
        bookmarks: newBeframeArr
    }); 
    let newBeotherdata = Object.assign({}, state.beotherdata, {
        bookmarks: newBeotherArr
    }); 
    let newTestingdata = Object.assign({}, state.testingdata, {
        bookmarks: newTestingArr
    }); 
    let newOtherdata = Object.assign({}, state.otherdata, {
        bookmarks: newOtherArr
    }); 

    // Return the new state including the new htmldata object
    return Object.assign({}, state, {
        htmldata: newHtmldata,
        cssdata: newCssdata,
        jsdata: newJsdata,
        feframedata: newFeframedata,
        feotherdata: newFeotherdata,
        begeneraldata: newBegeneraldata,
        beframedata: newBeframedata,
        beotherdata: newBeotherdata,
        testingdata: newTestingdata,
        otherdata: newOtherdata,
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
