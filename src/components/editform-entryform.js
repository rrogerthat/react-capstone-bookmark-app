import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect, withRouter} from 'react-router-dom';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {editProtectedData} from '../actions/protected-data';

import { loadFormData } from '../actions/protected-data';

import './newform-entryform.css';
/*
For communication between two components that don't have a parent-child 
relationship, you can set up your own global event system. Subscribe to events 
in componentDidMount(), unsubscribe in componentWillUnmount(), and call setState() 
when you receive an event. Flux pattern is one of the possible ways to arrange this.
*/
export class Editform extends React.Component {

	state = {
    	toDashboard: false,
  	}

  	componentDidMount() {
  		this.props.load(this.props.bookmark);
  	}

    onSubmit(values) {
    	let id = this.props.bookmark.created;
    	this.props.dispatch(editProtectedData(id, values))
    	.then(
    		this.setState(() => ({
        		toDashboard: true
      	}))
    	)
    }



	render () {
		const { pristine, reset, submitting } = this.props;


		if (this.state.toDashboard === true) {
      		return <Redirect to='/library' />
    	}

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
				<h1>Update bookmark</h1>
				<fieldset className="form-center" name="expense-info">
					<legend>Bookmark</legend>

					<label htmlFor="category">Choose Category:</label>
					<Field id="category" value="Front-end HTML" name="category" component="select" role="option" aria-selected="true" aria-live="polite" required>
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
						aria-live="polite"
					/>

					<Field 
						label="Description:"
						type="text"	
						name="description" 
						component={Input}
						validate={[required, nonEmpty]}
						aria-label="input" 
						aria-live="polite" 
					/>

		      		<fieldset>
				        <legend>Importance:</legend>
				        <label htmlFor="ans-1">
				        <Field component="input" type="radio" name="importance" value="Needs review" selected required/>
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
		      		<div>
				        <button type="submit">
				          Submit
				        </button>
				        <button type="button" disabled={pristine || submitting} onClick={reset}>
				          Undo Changes
				        </button>
				    </div>
		      		<Link to="/library"><button id="abortBtn" type="submit" aria-label="Close">Cancel</button></Link>
		      	</fieldset>
			</form>
		</section>		
	);
	}
}

const mapStateToProps = (state, ownProps) => {
	let combinedArr = [].concat(
		state.protectedData2.htmldata.bookmarks,
		state.protectedData2.cssdata.bookmarks,
		state.protectedData2.jsdata.bookmarks,
		state.protectedData2.feframedata.bookmarks,
		state.protectedData2.feotherdata.bookmarks,
		state.protectedData2.begeneraldata.bookmarks,
		state.protectedData2.beframedata.bookmarks,
		state.protectedData2.beotherdata.bookmarks,
		state.protectedData2.testingdata.bookmarks,
		state.protectedData2.otherdata.bookmarks
	)

	return {
		initialValues: state.protectedData2.data,
		bookmark: combinedArr.find(bookmark => bookmark.created === ownProps.match.params.id)
	};
}
//get bookmark data from edit, then pass to action/reducer


export default withRouter(connect(mapStateToProps, { load: loadFormData })(reduxForm({
    form: 'newentry',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newentry', Object.keys(errors)[0])),
    initialValue: {'category': 'Front-end HTML'}
})(Editform)));