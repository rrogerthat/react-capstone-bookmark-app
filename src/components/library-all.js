import React from 'react';
import { connect } from 'react-redux';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-all.css';

export class LibraryAll extends React.Component {

  
    render () {
		return(
			<div>
				<Navbar />
				<main role="main">
					<Header />
					<Selection />
		       	</main>
		       	<Footer />
			</div>
		);
	}
}

export default connect()(LibraryAll);