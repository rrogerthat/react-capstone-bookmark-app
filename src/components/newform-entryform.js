import React from 'react';
import {Link} from 'react-router-dom';

import './newform-entryform.css';

export default function Entryform(props) {
	return (
		<section id="entry-page">
			<form id ="entry-form">
				<h1>Enter new bookmark</h1>
				<fieldset className="form-center" name="expense-info">
					<legend>Bookmark</legend>
					<div id="entry-error" role="alertdialog"></div>

					<label htmlFor="category">Choose Category:</label>
					<select id="category" name="category" role="option" aria-selected="true" aria-live="assertive" required>
						<option value="1">HTML</option>
		        		<option value="2">CSS</option>
		        		<option value="3">Javascript</option>
		        		<option value="4">Front-end: Frameworks & Libraries</option>
		        		<option value="5">Front-end: Other</option>
		        		<option value="7">Back-end: General</option>
		        		<option value="8">Back-end: Frameworks & Libraries</option>
		        		<option value="9">Back-end: Other</option>
		        		<option value="10">Testing</option>
		        		<option value="11">Other</option>
		      		</select>

					<label htmlFor="url">URL:</label>
					<input id="url" placeholder="www.w3schools.com" type="url" name="url" aria-label="input" aria-live="assertive" />

					<label htmlFor="description">Description:</label>
		      		<input id="description" type="text" name="description" placeholder="Abcd" maxLength="50" aria-label="input" aria-live="assertive" />

		      		<fieldset>
				        <legend>Importance:</legend>
				        <label htmlFor="ans-1">
				        <input type="radio" name="important-1" id="ans-1" value="0" defaultChecked />
				        Needs review
				    	</label>	     
				        <label htmlFor="ans-2">
				        <input type="radio" name="important-1" id="ans-2" value="1" />
				        Review occasionally
				    	</label>   
				        <label htmlFor="ans-3">
				        <input type="radio" name="important-1" id="ans-3" value="2" />
				        Review only when needed
				    	</label>
		      		</fieldset>

		      		<fieldset>
				        <legend>Level of knowledge:</legend>   
				        <label htmlFor="choice-1">
				        <input type="radio" name="knowledge-2" id="choice-1" value="0" defaultChecked />
				        Beginner
				    	</label>
				        <label htmlFor="choice-2">
				        <input type="radio" name="knowledge-2" id="choice-2" value="1" />
				        Intermediate
				    	</label>
				        <label htmlFor="choice-3">
						<input type="radio" name="knowledge-2" id="choice-3" value="2" />
				        Expert
				    	</label>
		      		</fieldset>      		
		      		<input id="entryBtn" type="submit" value="Submit" />
		      		<Link to="/library"><button id="abortBtn" type="submit" aria-label="Close">Cancel</button></Link>
		      	</fieldset>
			</form>
		</section>		
	);
}