import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import Frontend from './library-frontend';
import Backend from './library-backend';
import Testing from './library-testing';
import Other from './library-other';

import './library-all.css';

export default function LibraryAll(props) {
	return(
			<div>
				<Navbar />
				<main role="main">
					<Header />
					<Selection />
					<Route exact path="/frontend" component={Frontend} />
					<Route exact path="/backend" component={Backend} />
					<Route exact path="/testing" component={Testing} />
					<Route exact path="/other" component={Other} />
	       		</main>
	       		<Footer />
			</div>
	);
}