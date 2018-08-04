import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {Redirect} from 'react-router-dom';

import './newform-navbar.css';

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