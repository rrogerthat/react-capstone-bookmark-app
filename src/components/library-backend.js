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

    onEdit(bookmark) {
    	console.log(bookmark)
    }

	render () {

	let setgeneral;
	if (this.props.beGeneralSect === undefined || this.props.beGeneralSect.length === 0) {
		setgeneral = <ul><li className='no-links'>No bookmarks currently here.</li></ul>;
	} else {
		setgeneral = 	this.props.beGeneralSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === 'Needs review') ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === 'Needs review') {
				setAlert = <i className='fa fa-exclamation-triangle' aria-hidden='true'></i>;
			}

			let setBell;	
			if (bookmark.knowledge === 'Beginner') {
				setBell = <i className='fa fa-bell' aria-hidden='true'></i>;
			}

				return (	
					<div className='eachSec' key={bookmark.created}>
						<ul>	
				    		<li className='url'><i className='fa fa-link' aria-hidden='true'></i> Link: <Link to={'//' + bookmark.link.replace(/(^\w+:|^)\/\//, '')} target='_blank'>{bookmark.description}</Link></li>
				    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
				    		<li className='knowledge'>Knowledge level: {bookmark.knowledge} {setBell}</li>
				    	</ul>
				    	<div className='twobtns'>
					    	<Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className='fa fa-pencil-square-o fa-lg' aria-hidden='true'></i> Edit</button></Link>	
							<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className='fa fa-trash fa-lg' aria-hidden='true'></i> Delete</button>
						</div>
					</div>
				)
		})
	}

	let setlibframe;
	if (this.props.beFrameSect === undefined || this.props.beFrameSect.length === 0) {
		setlibframe = <ul><li className='no-links'>No bookmarks currently here.</li></ul>;
	} else {
		setlibframe = 	this.props.beFrameSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === 'Needs review') ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === 'Needs review') {
				setAlert = <i className='fa fa-exclamation-triangle' aria-hidden='true'></i>;
			}

			let setBell;	
			if (bookmark.knowledge === 'Beginner') {
				setBell = <i className='fa fa-bell' aria-hidden='true'></i>;
			}

				return (
					<div className='eachSec' key={bookmark.created}>
					<ul>	
			    		<li className='url'><i className='fa fa-link' aria-hidden='true'></i> Link: <Link to={'//' + bookmark.link.replace(/(^\w+:|^)\/\//, '')} target='_blank'>{bookmark.description}</Link></li>
			    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    		<li className='knowledge'>Knowledge level: {bookmark.knowledge} {setBell}</li>
			    	</ul>
			    	<div className='twobtns'><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className='fa fa-pencil-square-o fa-lg' aria-hidden='true'></i> Edit</button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className='fa fa-trash fa-lg' aria-hidden='true'></i> Delete</button></div>
					</div>
				)
		})
	}

	let setother;
	if (this.props.beOtherSect === undefined || this.props.beOtherSect.length === 0) {
		setother = <ul><li className='no-links'>No bookmarks currently here.</li></ul>;
	} else {
		setother = 	this.props.beOtherSect.map((bookmark, index) => {
			let setColor = (bookmark.importance === 'Needs review') ? 'redalert': '';

			let setAlert;	
			if (bookmark.importance === 'Needs review') {
				setAlert = <i className='fa fa-exclamation-triangle' aria-hidden='true'></i>;
			}

			let setBell;	
			if (bookmark.knowledge === 'Beginner') {
				setBell = <i className='fa fa-bell' aria-hidden='true'></i>;
			}

				return (
					<div className='eachSec' key={bookmark.created}>
					<ul>	
			    		<li className='url'><i className='fa fa-link' aria-hidden='true'></i> Link: <Link to={'//' + bookmark.link.replace(/(^\w+:|^)\/\//, '')} target='_blank'>{bookmark.description}</Link></li>
			    		<li className={`importance ${setColor}`}>Importance: {bookmark.importance} {setAlert}</li>
			    		<li className='knowledge'>Knowledge level: {bookmark.knowledge} {setBell}</li>
			    	</ul>
			    	<div className='twobtns'><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'><i className='fa fa-pencil-square-o fa-lg' aria-hidden='true'></i> Edit</button></Link>	
					<button onClick={this.onDelete.bind(this, bookmark)} className='delBtn' type='submit'><i className='fa fa-trash fa-lg' aria-hidden='true'></i> Delete</button></div>
					</div>
				)
		})
	}

		return (
			<div>
				<Navbar />
				<main className='lib-main' role='main'>
					<Header />
					<Selection />
					<section className='lib-sec'>
				    	<h2 className='category'>General</h2>
						{setgeneral}
						<h2 className='category'>Frameworks & Libraries</h2>
				    	{setlibframe}
						<h2 className='category'>Other</h2>
						{setother}
			    	</section>
		    	</main>
		    	<Footer />
	    	</div>
		);
	}
}

const mapStateToProps = state => ({
	beGeneralSect: state.protectedData.begeneraldata.bookmarks,
	beFrameSect: state.protectedData.beframedata.bookmarks,	
	beOtherSect: state.protectedData.beotherdata.bookmarks 
});

export default connect(mapStateToProps)(Backend);