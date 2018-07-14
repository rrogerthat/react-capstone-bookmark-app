import React from 'react';
import {Link} from 'react-router-dom';

import './library-selection.css';

export default function Selection(props) {
	return (
		<section>
		    <Link to="/frontend"><button className="category-btn front-btn">Front-end</button></Link>
		    <Link to="/backend"><button className="category-btn">Back-end</button></Link>
		    <Link to="/testing"><button className="category-btn">Testing</button></Link>
		    <Link to="/other"><button className="category-btn">Other</button></Link>
	    </section>
	);
}