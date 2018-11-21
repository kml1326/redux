const initState = {title: ''}

const addTitle = (state = initState, action) => {
    switch(action.type) {
		case 'ADD_TITLE':
			return {title: action.data}
		default:
		return state;
	}
}

export default addTitle;