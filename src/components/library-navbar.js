import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Redirect} from 'react-router-dom';

import './library-navbar.css';

export class Navbar extends React.Component {

    logOut() {
        this.props.dispatch(clearAuth());       //empty out jwt token and user login info from state
        clearAuthToken();                       //also clear out from browser storage
    }

	render () {
		if (!this.props.loggedIn) {
        	return <Redirect to='/' />;	//logout to landing page
    	}

    	let thisUser;
    	if (this.props.presentUser !== undefined) {
    		thisUser = this.props.presentUser.username;
    	} else {
    		thisUser = 'unknown';
    	}

		return (
			<nav>
				<Link to='/entryform'><button className='new-btn' type='submit'><i className='fa fa-plus-square fa-lg' aria-hidden='true'></i> New Bookmark</button></Link>
				<button className='logout-btn' onClick={() => this.logOut()}><i className='fa fa-sign-out fa-lg' aria-hidden='true'></i> Logout</button>
				<p className='user-name'>Logged in as: {thisUser}</p>	
			</nav>
		);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    presentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Navbar);