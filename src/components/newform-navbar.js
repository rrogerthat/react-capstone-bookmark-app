import React from 'react';
import {Link} from 'react-router-dom';

import './newform-navbar.css';

export default function Navbar(props) {
	return (
		<nav>
			<Link to="/"><button className="logout-btn" type='submit'>Logout</button></Link>
		</nav>
	);
}