//helper function to redirect to url based on category selection
const getCategoryURL = category => {
	switch (category) {
		case 'Front-end HTML':
		case 'Front-end CSS':
		case 'Front-end Javascript':
		case 'Front-end Frameworks & Libraries':
		case 'Front-end Other':
			return 'frontend';
		case 'Back-end General':
		case 'Back-end Frameworks & Libraries':
		case 'Back-end Other':
			return 'backend';
		case 'Testing':
			return 'testing';
		case 'Other':
			return 'other';
	}
}

export default getCategoryURL;