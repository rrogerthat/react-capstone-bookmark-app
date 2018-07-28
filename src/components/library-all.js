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

  componentDidMount() {
    this.props.dispatch(fetchHtmlData('Front-end HTML'));
    this.props.dispatch(fetchCssData('Front-end CSS'));
    this.props.dispatch(fetchJsData('Front-end Javascript'));
    this.props.dispatch(fetchFeFrameData('Front-end Frameworks & Libraries'));
    this.props.dispatch(fetchFeOtherData('Front-end Other'));
    this.props.dispatch(fetchBeGeneralData('Back-end General'));
    this.props.dispatch(fetchBeFrameData('Back-end Frameworks & Libraries'));
    this.props.dispatch(fetchBeOtherData('Back-end Other'));
    this.props.dispatch(fetchTestingData('Testing'));
    this.props.dispatch(fetchOtherData('Other'));
  }

    render () {
		return(
			<div>
				<Navbar />
				<main role="main">
					<Header />
					<Selection />
		       	</main>
		       	<Footer />
			</div>
		);
	}
}

export default connect()(LibraryAll);