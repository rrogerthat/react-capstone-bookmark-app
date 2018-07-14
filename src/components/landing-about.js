import React from 'react';

import './landing-about.css';

export default function About(props) {
	return (
		<div>
			<header role="banner">
				<h1>Developer's Bookmark Tracker</h1>
			</header>	
			<section className="app-about"><p>Store and keep track of all your educational web development sites here</p></section>
			<section className="app-about"><p>Categorize your bookmarks and label each a level of importance and expertise</p></section>
			<section className="app-about"><p>Update your bookmarks based on your progress in each</p></section>
		</div>
	);
}