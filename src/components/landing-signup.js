import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';

import './landing-signup.css';

const passwordLength = length({min: 6, max: 72});
const matchesPassword = matches('password');



export class Signup extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

	render() {
		return (
			<div>
				<section id="signup">
					<header>
		            	<h3>Sign Up Now</h3>
		        	</header>
		        	<form 
		        		className='signup-form'
		        		onSubmit={this.props.handleSubmit(values =>
                    		this.onSubmit(values)
                	)}>			     
			            <label htmlFor="firstName">First name:</label>
			            <Field component={Input} type="text" name="firstName" />
			            
			            <label htmlFor="lastName">Last name:</label>
			            <Field component={Input} type="text" name="lastName" />
			            
			            <label htmlFor="username">Username:</label>
		                <Field
		                    component={Input}
		                    type="text"
		                    name="username"
		                    validate={[required, nonEmpty, isTrimmed]}
		                />
		                <label htmlFor="password">Password:</label>
		                <Field
		                    component={Input}
		                    type="password"
		                    name="password"
		                    validate={[required, passwordLength, isTrimmed]}
		                />
		                <label htmlFor="passwordConfirm">Confirm password:</label>
		                <Field
		                    component={Input}
		                    type="password"
		                    name="passwordConfirm"
		                    validate={[required, nonEmpty, matchesPassword]}
		                />
			            
			            <button type='submit' disabled={this.props.pristine || this.props.submitting}>Sign Up</button>
		        	</form>
				</section>
			</div>
		);
	}
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(Signup);