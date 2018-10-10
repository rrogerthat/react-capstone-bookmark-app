import React from 'react';
import { connect } from 'react-redux';
import {fetchHtmlData, fetchCssData, fetchJsData, fetchFeFrameData, fetchFeOtherData} from '../actions/protected-data';
import {fetchBeGeneralData, fetchBeFrameData, fetchBeOtherData} from '../actions/protected-data';
import {fetchTestingData} from '../actions/protected-data';
import {fetchOtherData} from '../actions/protected-data';

import Navbar from './library-navbar';
import Header from './library-header';
import Selection from './library-selection';
import Footer from './footer';

import './library-all.css';

export class LibraryAll extends React.Component {

	state = {
		loading: true
	};

	async componentDidMount() {		//get data from state when app starts (async so no error msg on form refresh)
		this.setState({ loading: false });

		await Promise.all([
		    this.props.dispatch(fetchHtmlData('Front-end HTML')),
		    this.props.dispatch(fetchCssData('Front-end CSS')),
		    this.props.dispatch(fetchJsData('Front-end Javascript')),
		    this.props.dispatch(fetchFeFrameData('Front-end Frameworks & Libraries')),
		    this.props.dispatch(fetchFeOtherData('Front-end Other')),
		    this.props.dispatch(fetchBeGeneralData('Back-end General')),
		    this.props.dispatch(fetchBeFrameData('Back-end Frameworks & Libraries')),
		    this.props.dispatch(fetchBeOtherData('Back-end Other')),
		    this.props.dispatch(fetchTestingData('Testing')),
		    this.props.dispatch(fetchOtherData('Other'))
	    ]);
	}
  
    render () {
		let { loading } = this.state;

	    if(loading) { 
      		return <img id="spinner" src={require("./spinner.svg")} alt="loading spinner" />;
    	}
		
		return(
			<div>
				<Navbar />
				<main className='lib-main' role='main' >
					<Header />
					<Selection />
		       	</main>
		       	<Footer />
			</div>
		);
	}
}

export default connect()(LibraryAll);