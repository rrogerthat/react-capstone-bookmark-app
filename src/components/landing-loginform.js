import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';

import './landing-loginform.css';

export class Loginform extends React.Component {

    state = {
		messsage: ''
	};

    onSubmit(values) {

        // setTimeout(() => this.setState({ loading: false }), 1500);
        // if (this.props.loggedIn) { 
        //     console.log('Roger')
        //     this.setState({ message: 'LOADING...' })
        // }

        return this.props.dispatch(login(values.user_name, values.pass_word));
    }

    render() {
        
        if (this.props.isLoading) { 
            console.log('Roger')
            return <img id='spinner' src={require('./spinner.svg')} alt='loading sign' />;
        }

        let error;
        if (this.props.error) {
            error = (
                <div className='form-error' role='alertdialog' aria-live='polite'>
                    {this.props.error}
                </div>
            );
        }
		return (
			<form 
			className='login-form'
			onSubmit={this.props.handleSubmit(values =>
            	this.onSubmit(values)
            )}>
			{error}
	
				<Field
                    component={Input}
                    label='Username:'
                    type='text'
                    name='user_name'
                    id='user_name'
                    validate={[required, nonEmpty]}
                />

			    <Field
                    component={Input}
                    label='Password:'
                    type='password'
                    name='pass_word'
                    id='pass_word'
                    validate={[required, nonEmpty]}
                />

			      <button id='loginBtn' type='submit' aria-label='sign-in' disabled={this.props.pristine || 
                    this.props.submitting}><i className='fa fa-sign-in' aria-hidden='true'></i> Sign In</button>
			      <button id='signupBtn' type='submit' disabled><a href='#firstName'><i className='fa fa-user' 
                  aria-hidden='true'></i> Register</a></button>
                  <div>{this.state.message}</div>
			</form>
		);
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    isLoading: state.auth.loading
});

Loginform = connect(mapStateToProps)(Loginform);    

Loginform = reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'user_name'))
})(Loginform);

export default Loginform;

