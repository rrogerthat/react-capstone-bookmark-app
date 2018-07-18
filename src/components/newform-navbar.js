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
        	return <Redirect to="/" />;	//logout to landing page
    	}

		return (
			<nav>
				<button className="logout-btn" onClick={() => this.logOut()}>Logout</button>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);