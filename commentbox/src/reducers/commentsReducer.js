const initState = {comments: []}

const addComments = (state = initState, action) => {
	switch(action.type) {
		case 'ADD_COMMENT':
			return {...state, 
				comments: [...state.comments, action.comment]}
		default:
		return state;
	}
}

export default addComments;