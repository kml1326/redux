const initState = []

const addComments = (state = initState, action) => {
	switch(action.type) {
		case 'ADD_COMMENT':
			return ([...initState, {title: action.comment}])
		default:
		return state;
	}
}

export default addComments;