import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export function Frontend(props) {
	let sethtml;
	if (props.link_1 === undefined) {
		sethtml = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		sethtml = 	<div>
					<ul>	
			    		<li className="url">Link: <a href={props.link_1} target="_blank">{props.description_1}</a></li>
			    		<li className="importance">Importance: {props.importance_1}</li>
			    		<li className="knowledge">Knowledge level: {props.knowledge_1}</li>
			    	</ul>
			    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button>
					</div>
	}

	let setcss;
	if (props.link_2 === undefined) {
		setcss = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setcss = 	<div>
					<ul>	
			    		<li className="url">Link: <a href={props.link_2} target="_blank">{props.description_2}</a></li>
			    		<li className="importance">Importance: {props.importance_2}</li>
			    		<li className="knowledge">Knowledge level: {props.knowledge_2}</li>
			    	</ul>
			    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button>
					</div>
	}

	let setjs;
	if (props.link_3 === undefined) {
		setjs = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setjs = 	<div>
					<ul>	
			    		<li className="url">Link: <a href={props.link_3} target="_blank">{props.description_3}</a></li>
			    		<li className="importance">Importance: {props.importance_3}</li>
			    		<li className="knowledge">Knowledge level: {props.knowledge_3}</li>
			    	</ul>
			    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button>
					</div>
	}

	let setlibframe;
	if (props.link_4 === undefined) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	<div>
						<ul>	
				    		<li className="url">Link: <a href={props.link_4} target="_blank">{props.description_4}</a></li>
				    		<li className="importance">Importance: {props.importance_4}</li>
				    		<li className="knowledge">Knowledge level: {props.knowledge_4}</li>
				    	</ul>
				    	<Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button>
						</div>
	}

	let setother;
	if (props.link_5 === undefined) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = 	<div>
						<ul>	
				    		<li className="url">Link: <a href={props.link_5} target="_blank">{props.description_5}</a></li>
				    		<li className="importance">Importance: {props.importance_5}</li>
				    		<li className="knowledge">Knowledge level: {props.knowledge_5}</li>
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
			    		<h2 className="category">HTML</h2>
			    		{/* array of objects in state- do .map in this component to append this UL */}
						{sethtml}
						<h2 className="category">CSS</h2>
			    		{setcss}
						<h2 className="category">Javascript</h2>
			    		{setjs}
						<h2 className="category">Frameworks & Libraries</h2>
						{setlibframe}
			    		<h2 className="category">Other</h2>
			    		{setother}
		    		</section>
		    		<Footer />
	    		</main>
    		</div>
	);
}

const mapStateToProps = state => ({  
  category_1: state.html.category,	
  link_1: state.html.link,
  description_1: state.html.description,
  importance_1: state.html.importance,
  knowledge_1: state.html.knowledge,
  category_2: state.css.category,	
  link_2: state.css.link,
  description_2: state.css.description,
  importance_2: state.css.importance,
  knowledge_2: state.css.knowledge,
  category_3: state.javascript.category,	
  link_3: state.javascript.link,
  description_3: state.javascript.description,
  importance_3: state.javascript.importance,
  knowledge_3: state.javascript.knowledge,
  category_4: state.frontLibFramework.category,	
  link_4: state.frontLibFramework.link,
  description_4: state.frontLibFramework.description,
  importance_4: state.frontLibFramework.importance,
  knowledge_4: state.frontLibFramework.knowledge,
  category_5: state.frontOther.category,	
  link_5: state.frontOther.link,
  description_5: state.frontOther.description,
  importance_5: state.frontOther.importance,
  knowledge_5: state.frontOther.knowledge  
});

export default connect(mapStateToProps)(Frontend);