import { combineReducers } from 'redux';
import addComments from './commentsReducer';
import addTitle from './titleReducer';

const reducer = combineReducers({
	comment: addComments,
	title: addTitle
})

export default reducer;