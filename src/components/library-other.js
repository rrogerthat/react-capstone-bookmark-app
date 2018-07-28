import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchDeleteData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Other extends React.Component {	

    onDelete(bookmark) {
    	// console.log(bookmark)
    	let id = bookmark.created;
    	this.props.dispatch(fetchDeleteData(id));
    }

    onEdit(bookmark) {
    	console.log(bookmark)
    }

	render () {

	let setother;
	if (this.props.otherSect === undefined || this.props.otherSect.length === 0) {
		setother = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		setother = this.props.otherSect.map((bookmark, index) => {
				return (
					<div className="eachSec" key={bookmark.created}>
					<ul>	
			    		<li className="url">Link: <Link to={'//' + bookmark.link} target="_blank">{bookmark.description}</Link></li>
			    		<li className="importance">Importance: {bookmark.importance}</li>
			    		<li className="knowledge">Knowledge level: {bookmark.knowledge}</li>
			    	</ul>
			    	<div className="twobtns"><Link to={`/editform/${bookmark.created}`}><button onClick={this.onEdit.bind(this, bookmark)} className='editBtn' type='submit'>Edit</button></Link>	
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
	otherSect: state.protectedData2.otherdata.bookmarks
});

export default connect(mapStateToProps)(Other);