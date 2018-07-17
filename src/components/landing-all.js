import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Navbar from './landing-navbar';
import About from './landing-about';
import Signup from './landing-signup';
import Footer from './footer';

export function LandingAll(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/library" />;
    }

	return(
		<div>
			<Navbar />
			<main role="main">
		       	<About />
		       	<Signup />
       		</main>
       		<Footer />
		</div>
	);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingAll);