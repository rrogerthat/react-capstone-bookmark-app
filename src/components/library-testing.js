import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchDeleteData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Testing extends React.Component {

    onDelete(bookmark) {
    	// console.log(bookmark)
    	let id = bookmark.created;
    	this.props.dispatch(fetchDeleteData(id));
    }

    onEdit(bookmark) {
    	console.log(bookmark)
    }
	
	render () {

	let settesting;
	if (this.props.testingSect === undefined || this.props.testingSect.length === 0) {
		settesting = <ul><li className='no-links'>No bookmarks currently here.</li></ul>;
	} else {
		settesting = this.props.testingSect.map((bookmark, index) => {
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
			    		<h2 className='category'>Testing</h2>
						{settesting}
		    		</section>
	    		</main>
	    		<Footer />
	    	</div>
		);
	}
}

const mapStateToProps = state => ({
	testingSect: state.protectedData.testingdata.bookmarks
});

export default connect(mapStateToProps)(Testing);