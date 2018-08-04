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
				<section id='signup'>
					<header id='land-head'>
		            	<h3>
		            	Sign Up Now <i className='fa fa-exclamation' aria-hidden='true'></i><br/><br/>
		            	<i className='fa fa-arrow-down fa-lg' aria-hidden='true'></i>
		            	</h3>
		        	</header>
		        	<form 
		        		className='signup-form'
		        		onSubmit={this.props.handleSubmit(values =>
                    		this.onSubmit(values)
                	)}>			     
			            <Field component={Input} label='First name:' type='text' name='firstName' />
			            
			            <Field component={Input} label='Last name:' type='text' name='lastName' />
			            
		                <Field
		                    component={Input}
		                    label='Username:'
		                    type='text'
		                    name='username'
		                    validate={[required, nonEmpty, isTrimmed]}
		                />

		                <Field
		                    component={Input}
		                    label='Password:'
		                    type='password'
		                    name='password'
		                    validate={[required, passwordLength, isTrimmed]}
		                />

		                <Field
		                    component={Input}
		                    label='Confirm password:'
		                    type='password'
		                    name='passwordConfirm'
		                    validate={[required, nonEmpty, matchesPassword]}
		                />
			            
			            <button id='signBtn' type='submit' disabled={this.props.pristine || this.props.submitting}>
			            <i className='fa fa-user-plus' aria-hidden='true'></i> Sign Up</button>
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