import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export function Testing(props) {
	let setgeneral;
	if (props.link_1 === undefined) {
		setgeneral = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setgeneral =	<div>
						<ul>	
				    		<li className="url">Link: <a href={props.link_1} target="_blank">{props.description_1}</a></li>
				    		<li className="importance">Importance: {props.importance_1}</li>
				    		<li className="knowledge">Knowledge level: {props.knowledge_1}</li>
				    	</ul>
				    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button></div>
						</div>
	}

	return (
		<div>
			<Navbar />
			<main role="main">
				<Header />
				<Selection />
				<section>
		    		<h2 className="category">Testing</h2>
					{setgeneral}
	    		</section>
    		</main>
    		<Footer />
    	</div>
	);
}

const mapStateToProps = state => ({
  category_1: state.protectedData.testing.category,	
  link_1: state.protectedData.testing.link,
  description_1: state.protectedData.testing.description,
  importance_1: state.protectedData.testing.importance,
  knowledge_1: state.protectedData.testing.knowledge 
});

export default connect(mapStateToProps)(Testing);