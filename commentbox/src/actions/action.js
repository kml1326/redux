export const addTitle = (data) => {
	return {
		type: 'ADD_TITLE',
		data: data	
	}
}

export const addComment = (comment) => {
	return {
		type: 'ADD_COMMENT',
		comment
	}
}