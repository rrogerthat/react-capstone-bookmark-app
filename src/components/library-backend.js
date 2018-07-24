import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchDeleteData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Backend extends React.Component {

    onDelete(bookmark) {
    	let id = bookmark.created;
    	this.props.dispatch(fetchDeleteData(id));
    }

	render () {

	let setgeneral;
	if (this.props.beGeneralSect === undefined || this.props.beGeneralSect.length === 0) {
		setgeneral = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setgeneral = 	this.props.beGeneralSect.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/editform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'>Delete</button></div>
					</div>
				)
		})
	}

	let setlibframe;
	if (this.props.beFrameSect === undefined || this.props.beFrameSect.length === 0) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	this.props.beFrameSect.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/editform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'>Delete</button></div>
					</div>
				)
		})
	}

	let setother;
	if (this.props.beOtherSect === undefined || this.props.beOtherSect.length === 0) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = 	this.props.beOtherSect.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/editform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'>Delete</button></div>
					</div>
				)
		})
	}

		return (
			<div>
				<Navbar />
				<main role="main">
					<Header />
					<Selection />
					<section>
				    	<h2 className="category">General</h2>
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
}

const mapStateToProps = state => ({
	beGeneralSect: state.protectedData2.begeneraldata.bookmarks,
	beFrameSect: state.protectedData2.beframedata.bookmarks,	
	beOtherSect: state.protectedData2.beotherdata.bookmarks 
});

export default connect(mapStateToProps)(Backend);