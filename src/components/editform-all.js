import React from 'react';
import { connect } from 'react-redux';

import Navbar from './newform-navbar';
import Editform from './editform-entryform';
import Footer from './footer';

export function EditFormAll(props) {

	return(
		<div>
			<Navbar />
			<main role="main">
				<Editform />
       		</main>
       		<Footer />
		</div>
	);
}

export default connect()(EditFormAll);
