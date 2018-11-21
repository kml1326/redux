import { combineReducers } from 'redux';
import addComments from './commentsReducer';
import addTitle from './titleReducer';

const reducer = combineReducers({
	addComments,
	addTitle
})

export default reducer;