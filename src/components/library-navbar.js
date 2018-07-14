import React from 'react';
import {Link} from 'react-router-dom';

import './library-navbar.css';

export default function Navbar(props) {
	return (
		<nav>
			<Link to="/entryform"><button className="new-btn" type='submit'>New Bookmark</button></Link>
			<Link to="/"><button className="logout-btn" type='submit'>Logout</button></Link>
		</nav>
	);
}