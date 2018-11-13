let initialState = {todoArray : []}


const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_TODO' : 
		return {todoArray : [...state.todoArray, action.text]}	;
		case 'DELETE_TODO' : 
		return {todoArray : [...state.todoArray]}	;
		default :
		return state
	}
};

export default reducer;