import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchDeleteData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Frontend extends React.Component {

    onDelete(bookmark) {
    	let id = bookmark.created;
    	this.props.dispatch(fetchDeleteData(id));
    }

    onEdit(bookmark) {
    	console.log(bookmark)
    }

    render() {
    //put inside render so no error when changed to stateful component.
	let sethtml;
	if (this.props.htmlSect === undefined || this.props.htmlSect.length === 0) {
		sethtml = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		sethtml = 	this.props.htmlSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === "Needs review") ? 'redalert': '';	//set class for links with high importance thru ternary operator

			let setAlert;	//alert symbol if link is high importance
			if (bookmark.importance === "Needs review") {
				setAlert = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
			}

			let setBell;	
			if (bookmark.knowledge === "Beginner") {
				setBell = <i className="fa fa-bell" aria-hidden="true"></i>;
			}

			return (
				<div className="eachSec" key={bookmark.created}>
				<ul>	
			    	<li className="url"><i className="fa fa-link" aria-hidden="true"></i> Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    	<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    	<li className="knowledge">Knowledge level: {bookmark.knowledge} {setBell}</li>
			    </ul>	
			    <div className="twobtns"><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button></Link>
				<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></div>
				</div>
			)  
		})
	}

	let setcss;
	if (this.props.cssSect === undefined || this.props.cssSect.length === 0) {
		setcss = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setcss = 	this.props.cssSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === "Needs review") ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === "Needs review") {
				setAlert = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
			}

			let setBell;	
			if (bookmark.knowledge === "Beginner") {
				setBell = <i className="fa fa-bell" aria-hidden="true"></i>;
			}

				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url"><i className="fa fa-link" aria-hidden="true"></i> Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge} {setBell}</li>
			    	</ul>
			    	<div className="twobtns"><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button></Link>
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></div>
					</div>
				)
		})
	}

	let setjs;
	if (this.props.jsSect === undefined || this.props.jsSect.length === 0) {
		setjs = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setjs = 	this.props.jsSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === "Needs review") ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === "Needs review") {
				setAlert = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
			}

			let setBell;	
			if (bookmark.knowledge === "Beginner") {
				setBell = <i className="fa fa-bell" aria-hidden="true"></i>;
			}

				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url"><i className="fa fa-link" aria-hidden="true"></i> Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge} {setBell}</li>
			    	</ul>
			    	<div className="twobtns"><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></div>
					</div>
				)
		})
	}

	let setlibframe;
	if (this.props.feframeSect === undefined || this.props.feframeSect.length === 0) {
		setlibframe = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	this.props.feframeSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === "Needs review") ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === "Needs review") {
				setAlert = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
			}

			let setBell;	
			if (bookmark.knowledge === "Beginner") {
				setBell = <i className="fa fa-bell" aria-hidden="true"></i>;
			}

				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url"><i className="fa fa-link" aria-hidden="true"></i> Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge} {setBell}</li>
			    	</ul>
			    	<div className="twobtns"><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></div>
					</div>
				)
		})
	}
	
	let setother;
	if (this.props.feOtherSect === undefined || this.props.feOtherSect.length === 0) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = 	this.props.feOtherSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === "Needs review") ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === "Needs review") {
				setAlert = <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>;
			}

			let setBell;	
			if (bookmark.knowledge === "Beginner") {
				setBell = <i className="fa fa-bell" aria-hidden="true"></i>;
			}

				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url"><i className="fa fa-link" aria-hidden="true"></i> Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge} {setBell}</li>
			    	</ul>
			    	<div className="twobtns"><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button></Link>
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></div>
					</div>
				)
		})
	}

	return (
			<div>
				<Navbar />
				<main className="lib-main" role="main">
					<Header />
					<Selection />
					<section className="lib-sec">
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
	htmlSect: state.protectedData2.htmldata.bookmarks,	
	cssSect: state.protectedData2.cssdata.bookmarks,
	jsSect: state.protectedData2.jsdata.bookmarks,
	feframeSect: state.protectedData2.feframedata.bookmarks,
	feOtherSect: state.protectedData2.feotherdata.bookmarks  
});

export default connect(mapStateToProps)(Frontend);