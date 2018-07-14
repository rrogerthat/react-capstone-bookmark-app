import React from 'react';
import {Link} from 'react-router-dom';

import './landing-navbar.css';

export default function Navbar(props) {
	return (
		<nav>
			<form id="login-form">
				<label htmlFor="login-name">Username:</label>
				<input id="login-name" placeholder="johndoe111" type="text" name="login-name" aria-label="input" aria-live="assertive" />

				<label htmlFor="password">Password:</label>
	      		<input id="login-pw" placeholder="123456" type="password" name="password" id="password" aria-label="input" />

	      		<Link to="/library"><input id="loginBtn" type="submit" value="Sign In" aria-label="input" /></Link>
	      		<button id="signupBtn" type="submit" disabled><a href="#signup" role="link">Register</a></button>
			</form>
		</nav>
	);
}