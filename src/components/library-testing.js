import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchTestingData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-link-lists.css';

export class Testing extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchTestingData('Testing'));
    }
	
	render () {

	let settesting;
	if (this.props.testingData === undefined || this.props.testingData.length === 0) {
		settesting = <ul><li className="no-links">No bookmarks currently here.</li></ul>;
	} else {
		settesting = this.props.testingData.map((bookmark, index) => {
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
			    		<h2 className="category">Testing</h2>
						{settesting}
		    		</section>
	    		</main>
	    		<Footer />
	    	</div>
		);
	}
}

const mapStateToProps = state => ({
	testingData: state.protectedData2.testingdata.bookmarks
});

export default connect(mapStateToProps)(Testing);