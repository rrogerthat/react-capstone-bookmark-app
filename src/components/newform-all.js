import React from 'react';
import { connect } from 'react-redux';

import Navbar from './newform-navbar';
import Entryform from './newform-entryform';
import Footer from './footer';

export function NewFormAll(props) {				
	return(
		<div>
			<Navbar />
			<main role='main'>
				<Entryform />
       		</main>
       		<Footer />
		</div>
	);
}

export default connect()(NewFormAll);
