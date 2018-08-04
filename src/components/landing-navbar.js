import React from 'react';

import Loginform from './landing-loginform';

import './landing-navbar.css';

export default function Navbar(props) {
	return (
		<nav>
			<p id='demoUser'><b>Demo Account:</b><br/> Username- demouser | Password- 123456</p>
			<Loginform />
		</nav>
	);
}