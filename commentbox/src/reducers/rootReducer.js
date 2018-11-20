let initState = {}

const reducer = (state = initState, action) => {
	switch(action.type) {
		case 'ADD_TITLE':
			return state
		case 'ADD_COMMENT':
			return state
		default:
			return state;
	}
}