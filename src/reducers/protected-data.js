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
    // Determine the new list of bookmarks (filtered)
    let newBookmarks = state.htmldata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    });
    let newBookmarks2 = state.cssdata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    });   
    let newBookmarks3 = state.jsdata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    });  
    let newBookmarks4 = state.feframedata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    });       
    let newBookmarks5 = state.feotherdata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    });  
    let newBookmarks6 = state.begeneraldata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    });  
    let newBookmarks7 = state.beframedata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    }); 
    let newBookmarks8 = state.beotherdata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    }); 
    let newBookmarks9 = state.testingdata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    }); 
    let newBookmarks10 = state.otherdata.bookmarks.filter(item => {
        return item.created !== action.data.url.substr(34, 57);
    }); 

    // Build the new htmldata object. It's a copy of the old one with
    // the old "bookmarks" array overridden with the new filtered one.
    //Each argument needs to be an object!
    let newHtmldata = Object.assign({}, state.htmldata, {
        bookmarks: newBookmarks
    });
    let newCssdata = Object.assign({}, state.cssdata, {
        bookmarks: newBookmarks2
    });
    let newJsdata = Object.assign({}, state.jsdata, {
        bookmarks: newBookmarks3
    });    
    let newFeframedata = Object.assign({}, state.feframedata, {
        bookmarks: newBookmarks4
    }); 
    let newFeotherdata = Object.assign({}, state.feotherdata, {
        bookmarks: newBookmarks5
    }); 
    let newBegeneraldata = Object.assign({}, state.begeneraldata, {
        bookmarks: newBookmarks6
    }); 
    let newBeframedata = Object.assign({}, state.beframedata, {
        bookmarks: newBookmarks7
    }); 
    let newBeotherdata = Object.assign({}, state.beotherdata, {
        bookmarks: newBookmarks8
    }); 
    let newTestingdata = Object.assign({}, state.testingdata, {
        bookmarks: newBookmarks9
    }); 
    let newOtherdata = Object.assign({}, state.otherdata, {
        bookmarks: newBookmarks10
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
    else if (action.type === 'LOAD') {
        return Object.assign ({}, state, {
            data: action.data
        });
    }
    return state;

}
