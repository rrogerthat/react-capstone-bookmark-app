import React from 'react';

import Navbar from './landing-navbar';
import About from './landing-about';
import Signup from './landing-signup';
import Footer from './footer';

export default function LandingAll(props) {
	return(
		<div>
			<Navbar />
			<main role="main">
		       	<About />
		       	<Signup />
       		</main>
       		<Footer />
		</div>
	);
}