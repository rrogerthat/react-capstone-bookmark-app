import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Frontend extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
	let sethtml; //put inside render so no error when changed to stateful component
	if (this.props.link_1 === undefined) {
		sethtml = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		sethtml = 	<div>
					<ul>	
			    		<li className="url">Link: <a href={this.props.link_1} target="_blank">{this.props.description_1}</a></li>
			    		<li className="importance">Importance: {this.props.importance_1}</li>
			    		<li className="knowledge">Knowledge level: {this.props.knowledge_1}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button></div>
					</div>
	}

	let setcss;
	if (this.props.link_2 === undefined) {
		setcss = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setcss = 	<div>
					<ul>	
			    		<li className="url">Link: <a href={this.props.link_2} target="_blank">{this.props.description_2}</a></li>
			    		<li className="importance">Importance: {this.props.importance_2}</li>
			    		<li className="knowledge">Knowledge level: {this.props.knowledge_2}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button></div>
					</div>
	}

	let setjs;
	if (this.props.link_3 === undefined) {
		setjs = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setjs = 	<div>
					<ul>	
			    		<li className="url">Link: <a href={this.props.link_3} target="_blank">{this.props.description_3}</a></li>
			    		<li className="importance">Importance: {this.props.importance_3}</li>
			    		<li className="knowledge">Knowledge level: {this.props.knowledge_3}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button></div>
					</div>
	}

	let setlibframe;
	if (this.props.link_4 === undefined) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	<div>
						<ul>	
				    		<li className="url">Link: <a href={this.props.link_4} target="_blank">{this.props.description_4}</a></li>
				    		<li className="importance">Importance: {this.props.importance_4}</li>
				    		<li className="knowledge">Knowledge level: {this.props.knowledge_4}</li>
				    	</ul>
				    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
						<button className='delBtn' type='submit'>Delete</button></div>
						</div>
	}

	let setother;
	if (this.props.link_5 === undefined) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = 	<div>
						<ul>	
				    		<li className="url">Link: <a href={this.props.link_5} target="_blank">{this.props.description_5}</a></li>
				    		<li className="importance">Importance: {this.props.importance_5}</li>
				    		<li className="knowledge">Knowledge level: {this.props.knowledge_5}</li>
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
}

const mapStateToProps = state => ({  
  category_1: state.protectedData.html.category,	
  link_1: state.protectedData.html.link,
  description_1: state.protectedData.html.description,
  importance_1: state.protectedData.html.importance,
  knowledge_1: state.protectedData.html.knowledge,
  category_2: state.protectedData.css.category,	
  link_2: state.protectedData.css.link,
  description_2: state.protectedData.css.description,
  importance_2: state.protectedData.css.importance,
  knowledge_2: state.protectedData.css.knowledge,
  category_3: state.protectedData.javascript.category,	
  link_3: state.protectedData.javascript.link,
  description_3: state.protectedData.javascript.description,
  importance_3: state.protectedData.javascript.importance,
  knowledge_3: state.protectedData.javascript.knowledge,
  category_4: state.protectedData.frontLibFramework.category,	
  link_4: state.protectedData.frontLibFramework.link,
  description_4: state.protectedData.frontLibFramework.description,
  importance_4: state.protectedData.frontLibFramework.importance,
  knowledge_4: state.protectedData.frontLibFramework.knowledge,
  category_5: state.protectedData.frontOther.category,	
  link_5: state.protectedData.frontOther.link,
  description_5: state.protectedData.frontOther.description,
  importance_5: state.protectedData.frontOther.importance,
  knowledge_5: state.protectedData.frontOther.knowledge  
});

export default connect(mapStateToProps)(Frontend);