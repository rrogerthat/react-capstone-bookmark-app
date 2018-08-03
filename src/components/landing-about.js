import React from 'react';

import './landing-about.css';

export default function About(props) {
	return (
		<div>
			<header id="landing-head" role="banner">
				<h1>Developer's Bookmark Tracker</h1>
			</header>	
			<section className="app-about"><p>Store and keep track of all your educational web development/coding sites here...</p></section>
			<section className="app-about">
				<p>Categorize your bookmarks and give them an order of importance:</p><br/>
				<img src={require("./pic3.PNG")} alt="img1" />
			</section>
			<section className="app-about">
				<p>Bookmarks requiring more attention are color coded and specially labeled:</p><br/>
				<img id="image-1" src={require("./pic1.PNG")} alt="img1" />
				<img src={require("./pic2.PNG")} alt="img1" />
			</section>
		</div>
	);
}