import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchBeGeneralData, fetchBeFrameData, fetchBeOtherData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Backend extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBeGeneralData('Back-end General'));
        this.props.dispatch(fetchBeFrameData('Back-end Frameworks & Libraries'));
        this.props.dispatch(fetchBeOtherData('Back-end Other'));
    }

	render () {

	let setgeneral;
	if (this.props.beGeneralData === undefined || this.props.beGeneralData.length === 0) {
		setgeneral = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setgeneral = 	this.props.beGeneralData.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button></div>
					</div>
				)
		})
	}

	let setlibframe;
	if (this.props.beFrameData === undefined || this.props.beFrameData.length === 0) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	this.props.beFrameData.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button></div>
					</div>
				)
		})
	}

	let setother;
	if (this.props.beOtherData === undefined || this.props.beOtherData.length === 0) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = 	this.props.beOtherData.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button className='delBtn' type='submit'>Delete</button></div>
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
	beGeneralData: state.protectedData2.begeneraldata.bookmarks,
	beFrameData: state.protectedData2.beframedata.bookmarks,	
	beOtherData: state.protectedData2.beotherdata.bookmarks 
});

export default connect(mapStateToProps)(Backend);