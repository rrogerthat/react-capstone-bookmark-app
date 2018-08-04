import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import LandingAll from './landing-all';
import NewFormAll from './newform-all';
import EditFormAll from './editform-all';
import Frontend from './library-frontend';
import LibraryAll from './library-all';
import Backend from './library-backend';
import Testing from './library-testing';
import Other from './library-other';

class App extends Component {

  render() {
    return (
	    <Router>
	      <div className='App'>
	      	<Route exact path='/' component={LandingAll} />
	        <Route exact path='/entryform' component={NewFormAll} />
	        <Route exact path='/editform/:id' component={EditFormAll} />
	        <Route exact path='/frontend' component={Frontend} />
	        <Route exact path='/library' component={LibraryAll} />
			<Route exact path='/backend' component={Backend} />
			<Route exact path='/testing' component={Testing} />
			<Route exact path='/other' component={Other} />
	      </div>
	    </Router>
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);
