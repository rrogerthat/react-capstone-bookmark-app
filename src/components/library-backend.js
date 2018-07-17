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
				    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button></div>
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
				    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button></div>
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
  category_1: state.protectedData.backGeneral.category,	
  link_1: state.protectedData.backGeneral.link,
  description_1: state.protectedData.backGeneral.description,
  importance_1: state.protectedData.backGeneral.importance,
  knowledge_1: state.protectedData.backGeneral.knowledge,
  category_2: state.protectedData.backLibFramework.category,	
  link_2: state.protectedData.backLibFramework.link,
  description_2: state.protectedData.backLibFramework.description,
  importance_2: state.protectedData.backLibFramework.importance,
  knowledge_2: state.protectedData.backLibFramework.knowledge,
  category_3: state.protectedData.backOther.category,	
  link_3: state.protectedData.backOther.link,
  description_3: state.protectedData.backOther.description,
  importance_3: state.protectedData.backOther.importance,
  knowledge_3: state.protectedData.backOther.knowledge  
});

export default connect(mapStateToProps)(Backend);