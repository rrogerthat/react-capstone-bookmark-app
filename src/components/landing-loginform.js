import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

import './landing-loginform.css';

export class Loginform extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.user_name, values.pass_word));

    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
		return (
			<form 
			className="login-form"
			onSubmit={this.props.handleSubmit(values =>
            	this.onSubmit(values)
            )}>
			{error}
	
				<Field
                    component={Input}
                    label="Username:"
                    type="text"
                    name="user_name"
                    id="user_name"
                    validate={[required, nonEmpty]}
                />

			    <Field
                    component={Input}
                    label="Password:"
                    type="password"
                    name="pass_word"
                    id="pass_word"
                    validate={[required, nonEmpty]}
                />

			      <button id="loginBtn" type="submit" aria-label="input" disabled={this.props.pristine || this.props.submitting}><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</button>
			      <button id="signupBtn" type="submit" disabled><a href="#firstName"><i className="fa fa-user" aria-hidden="true"></i> Register</a></button>
			</form>
		);
	}
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'user_name'))
})(Loginform);