import React from 'react';
import {Link} from 'react-router-dom';

import './library-selection.css';

export default function Selection(props) {
	//check browser url location to set class for buttons using ternary operator
	let front = (window.location.href.split("/").pop() === "frontend") ? 'active': '';
	let back = (window.location.href.split("/").pop() === "backend") ? 'active': '';
	let test = (window.location.href.split("/").pop() === "testing") ? 'active': '';
	let other = (window.location.href.split("/").pop() === "other") ? 'active': '';

	let toDisplay;
	if (window.location.href.split("/").pop() === "library") {
		toDisplay = <p className="directUser">
						<i className="fa fa-long-arrow-up" aria-hidden="true"></i><br/>
						Click above buttons to display bookmarks 
					</p>;
	}

	return (
		<section>
			<Link to="/frontend"><button className={`category-btn ${front}`}><i className="fa fa-list-ul" aria-hidden="true"></i> Front-end</button></Link>
			<Link to="/backend"><button className={`category-btn ${back}`}><i className="fa fa-list-ul" aria-hidden="true"></i> Back-end</button></Link>
			<Link to="/testing"><button className={`category-btn ${test}`}><i className="fa fa-list-ul" aria-hidden="true"></i> Testing</button></Link>
			<Link to="/other"><button className={`category-btn ${other}`}><i className="fa fa-list-ul" aria-hidden="true"></i> Other</button></Link>
			{toDisplay}
		</section>
		
	);
}