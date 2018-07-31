import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {postProtectedData} from '../actions/protected-data';
import getCategoryURL from '../get-category-url';	//helper function

import './newform-entryform.css';

export class Entryform extends React.Component {

    onSubmit(values) {
    	this.props.dispatch(postProtectedData(values))
    	.then(() => {
    		const { category } = values;	//obj destructuring
    		this.props.history.push(`/${getCategoryURL(category)}`);	//change url based on category
    	});
    }	

	render () {

        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

	return (
		<section id="entry-page">
			<form 
				className ="entry-form"
				onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
			)}>
			{successMessage}
			{errorMessage}
				<h1>Enter new bookmark</h1>
				<fieldset className="form-center" name="expense-info">
					<legend>Bookmark</legend>

					<label htmlFor="category">Choose Category:</label>
					<Field id="category" name="category" component="select" role="option" aria-selected="true" aria-live="assertive" required>
						<option/ >
						<option value="Front-end HTML">Front-end HTML</option>
		        		<option value="Front-end CSS">Front-end CSS</option>
		        		<option value="Front-end Javascript">Front-end Javascript</option>
		        		<option value="Front-end Frameworks & Libraries">Front-end Frameworks & Libraries</option>
		        		<option value="Front-end Other">Front-end Other</option>
		        		<option value="Back-end General">Back-end General</option>
		        		<option value="Back-end Frameworks & Libraries">Back-end Frameworks & Libraries</option>
		        		<option value="Back-end Other">Back-end Other</option>
		        		<option value="Testing">Testing</option>
		        		<option value="Other">Other</option>
		      		</Field>

					<Field 
						label="Link/URL:"
						type="text"	 
						name="link" 
						component={Input}
						validate={[required, nonEmpty]}
						aria-label="input" 
						aria-live="assertive"
					/>

					<Field 
						label="Description:"
						type="text"	 
						name="description" 
						component={Input}
						validate={[required, nonEmpty]}
						aria-label="input" 
						aria-live="assertive" 
					/>

		      		<fieldset>
				        <legend>Importance:</legend>
				        <label htmlFor="ans-1">
				        <Field component="input" type="radio" name="importance" value="Needs review" required/>
				        Needs review
				    	</label>	     
				        <label htmlFor="ans-2">
				        <Field  component="input" type="radio" name="importance" value="Review occasionally" />
				        Review occasionally
				    	</label>   
				        <label htmlFor="ans-3">
				        <Field  component="input" type="radio" name="importance" value="Review only when needed" />
				        Review only when needed
				    	</label>
		      		</fieldset>

		      		<fieldset>
				        <legend>Level of knowledge:</legend>   
				        <label htmlFor="choice-1">
				        <Field component="input" type="radio" name="knowledge" value="Beginner" required/>
				        Beginner
				    	</label>
				        <label htmlFor="choice-2">
				        <Field component="input" type="radio" name="knowledge" value="Intermediate" />
				        Intermediate
				    	</label>
				        <label htmlFor="choice-3">
						<Field component="input" type="radio" name="knowledge" value="Expert" />
				        Expert
				    	</label>
		      		</fieldset>      		
		      		<button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                	</button>
		      		<Link to="/library"><button id="abortBtn" type="submit" aria-label="Close">Cancel</button></Link>
		      	</fieldset>
			</form>
		</section>		
	);
	}
}

export default withRouter(reduxForm({
    form: 'newentry',

    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newentry', Object.keys(errors)[0])),
    initialValue: {'category': 'Front-end HTML'}
})(Entryform));