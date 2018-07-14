import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export function Backend(props) {
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
				    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button>
						</div>
	}

	let setlibframe;
	if (props.link_2 === undefined) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe =	<div>
						<ul>	
				    		<li className="url">Link: <a href={props.link_2} target="_blank">{props.description_2}</a></li>
				    		<li className="importance">Importance: {props.importance_2}</li>
				    		<li className="knowledge">Knowledge level: {props.knowledge_2}</li>
				    	</ul>
				    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button>
						</div>
	}

	let setother;
	if (props.link_3 === undefined) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother =	<div>
						<ul>	
				    		<li className="url">Link: <a href={props.link_3} target="_blank">{props.description_3}</a></li>
				    		<li className="importance">Importance: {props.importance_3}</li>
				    		<li className="knowledge">Knowledge level: {props.knowledge_3}</li>
				    	</ul>
				    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button>
						</div>
	}

	return (
			<div>
				<Navbar />
				<main role="main">
					<Header />
					<Selection />
					<section>
			    		<h2 className="category">Back-end</h2>
						{setgeneral}
						<h2 className="category">Frameworks & Libraries</h2>
			    		{setlibframe}
						<h2 className="category">Other</h2>
						{setother}
		    		</section>
	    		</main>
	    		<Footer />
    		</div>
	);
}

const mapStateToProps = state => ({
  category_1: state.backGeneral.category,	
  link_1: state.backGeneral.link,
  description_1: state.backGeneral.description,
  importance_1: state.backGeneral.importance,
  knowledge_1: state.backGeneral.knowledge,
  category_2: state.backLibFramework.category,	
  link_2: state.backLibFramework.link,
  description_2: state.backLibFramework.description,
  importance_2: state.backLibFramework.importance,
  knowledge_2: state.backLibFramework.knowledge,
  category_3: state.backOther.category,	
  link_3: state.backOther.link,
  description_3: state.backOther.description,
  importance_3: state.backOther.importance,
  knowledge_3: state.backOther.knowledge  
});

export default connect(mapStateToProps)(Backend);