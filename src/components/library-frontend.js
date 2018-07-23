import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchHtmlData, fetchCssData, fetchJsData, fetchFeFrameData, fetchFeOtherData} from '../actions/protected-data';
import {fetchDeleteData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Frontend extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchHtmlData('Front-end HTML'));
        this.props.dispatch(fetchCssData('Front-end CSS'));
        this.props.dispatch(fetchJsData('Front-end Javascript'));
        this.props.dispatch(fetchFeFrameData('Front-end Frameworks & Libraries'));
        this.props.dispatch(fetchFeOtherData('Front-end Other'));
    }

    onDelete(bookmark) {
    	console.log(bookmark)
    	let id = bookmark.created;
    	this.props.dispatch(fetchDeleteData(id));
    }

    render() {
    //put inside render so no error when changed to stateful component.
	let sethtml;
	if (this.props.htmlData === undefined || this.props.htmlData.length === 0) {
		sethtml = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		sethtml = 	this.props.htmlData.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to="/entryform"><button className='editBtn' type='submit'>Edit</button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'>Delete</button></div>
					</div>
				)
		})
	}

	let setcss;
	if (this.props.cssData === undefined || this.props.cssData.length === 0) {
		setcss = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setcss = 	this.props.cssData.map((bookmark, index) => {
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

	let setjs;
	if (this.props.jsData === undefined || this.props.jsData.length === 0) {
		setjs = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setjs = 	this.props.jsData.map((bookmark, index) => {
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
	if (this.props.feframeData === undefined || this.props.feframeData.length === 0) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	this.props.feframeData.map((bookmark, index) => {
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
	if (this.props.feOtherData === undefined || this.props.feOtherData.length === 0) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = 	this.props.feOtherData.map((bookmark, index) => {
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
			    		<h2 className="category">HTML</h2>
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
	htmlData: state.protectedData2.htmldata.bookmarks,	
	cssData: state.protectedData2.cssdata.bookmarks,
	jsData: state.protectedData2.jsdata.bookmarks,
	feframeData: state.protectedData2.feframedata.bookmarks,
	feOtherData: state.protectedData2.feotherdata.bookmarks  
});

export default connect(mapStateToProps)(Frontend);