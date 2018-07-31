import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {fetchHtmlData, fetchCssData, fetchJsData, fetchFeFrameData, fetchFeOtherData} from '../actions/protected-data';
import {fetchBeGeneralData, fetchBeFrameData, fetchBeOtherData} from '../actions/protected-data';
import {fetchTestingData} from '../actions/protected-data';
import {fetchOtherData} from '../actions/protected-data';


import LandingAll from './landing-all';
import NewFormAll from './newform-all';
import EditFormAll from './editform-all';
import Frontend from './library-frontend';
import LibraryAll from './library-all';
import Backend from './library-backend';
import Testing from './library-testing';
import Other from './library-other';

class App extends Component {

async componentDidMount() {		//get data from state when app starts (async so no error msg on form refresh)
	await Promise.all([
	    this.props.dispatch(fetchHtmlData('Front-end HTML')),
	    this.props.dispatch(fetchCssData('Front-end CSS')),
	    this.props.dispatch(fetchJsData('Front-end Javascript')),
	    this.props.dispatch(fetchFeFrameData('Front-end Frameworks & Libraries')),
	    this.props.dispatch(fetchFeOtherData('Front-end Other')),
	    this.props.dispatch(fetchBeGeneralData('Back-end General')),
	    this.props.dispatch(fetchBeFrameData('Back-end Frameworks & Libraries')),
	    this.props.dispatch(fetchBeOtherData('Back-end Other')),
	    this.props.dispatch(fetchTestingData('Testing')),
	    this.props.dispatch(fetchOtherData('Other'))
    ]);
}

  render() {
    return (
	    <Router>
	      <div className="App">
	      	<Route exact path="/" component={LandingAll} />
	        <Route exact path="/entryform" component={NewFormAll} />
	        <Route exact path="/editform/:id" component={EditFormAll} />
	        <Route exact path="/frontend" component={Frontend} />
	        <Route exact path="/library" component={LibraryAll} />
			<Route exact path="/backend" component={Backend} />
			<Route exact path="/testing" component={Testing} />
			<Route exact path="/other" component={Other} />
	      </div>
	    </Router>
    );
  }
}

export default connect()(App);
