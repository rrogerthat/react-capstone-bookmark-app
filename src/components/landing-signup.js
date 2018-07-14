import React from 'react';

import './landing-signup.css';

export default function Signup(props) {
	return (
		<div>
			<section id="signup">
				<header>
	            	<h3>Sign Up Now</h3>
	        	</header>
	        	<form className='signup-form'>
		            <div>
		              <label htmlFor="first-name">First name:</label>
		              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
		            </div>
		            <div>
		              <label htmlFor="last-name">Last name:</label>
		              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
		            </div>
		            <div>
		              <label htmlFor="pw">Password:</label>
		              <input type="password" name='pw' id='pw' />
		            </div>
		            <button type='submit'>Sign Up</button>
	        	</form>
			</section>
		</div>
	);
}