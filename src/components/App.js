import React, { Component } from 'react';
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
	      <div className="App">
	      	<Route exact path="/" component={LandingAll} />
	        <Route exact path="/entryform" component={NewFormAll} />
	        <Route exact path="/editform" component={EditFormAll} />
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

export default App;
