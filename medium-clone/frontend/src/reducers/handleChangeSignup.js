const initialState = {
	username : '',
	email : '',
	password : ''
};

function handleChangeSignup(state = initialState, action) {
	return ({
		username : action.username,
		email : action.email,
		password : action.password	
	});
}

export default handleChangeSignup;