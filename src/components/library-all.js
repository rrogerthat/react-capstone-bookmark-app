import React from 'react';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-all.css';

export default function LibraryAll(props) {
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