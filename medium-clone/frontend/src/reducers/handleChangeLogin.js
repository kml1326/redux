const initialState = {
	identifier : '',
	password : ''
};

function handleChangeLogin(state = initialState, action) {
	switch(action.type) {
		case 'HANDLECHANGE_LOGIN' :
			switch(action.data.name) {
				case 'identifier' :
				return {identifier : action.data.value};
				case 'password' :
				return {password : action.data.value};
				default : 
				return state
			}
		default :
			return state;
	}
}

export default handleChangeLogin;