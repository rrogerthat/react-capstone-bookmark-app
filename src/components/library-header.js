import React from 'react';

import './library-header.css';

export default function Header(props) {
	return (
		<div>
			<header id="head-lib" role="banner">
        		<h1 id="head-first"><i className="fa fa-bookmark" aria-hidden="true"></i> Bookmark Library</h1>
    		</header>	
		</div>
	);
}