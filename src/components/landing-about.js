import React from 'react';

import './landing-about.css';

export default function About(props) {
	return (
		<div>
			<header id="landing-head" role="banner">
				<h1>Developer's Bookmark Tracker</h1>
			</header>	
			<section className="app-about"><p>Store and keep track of all your educational web development sites here</p></section>
			<section className="app-about"><p>Categorize your bookmarks and label each a level of importance and expertise</p></section>
			<section className="app-about">
				<p>Bookmarks requiring more review are color coded and specially labeled</p>
				// <img src="./pic1.PNG" alt="sample1"/>
			</section>
		</div>
	);
}