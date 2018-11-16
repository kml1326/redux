import { createStore, combineReducers } from 'redux';
import handleChangeLogin from './reducers/handleChangeLogin';
import handleChangeSignup from './reducers/handleChangeSignup';
import handleClickLogin from './reducers/handleClickLogin';


const rootReducer = combineReducers({
    handleChangeLogin,
    handleClickLogin,
    handleChangeSignup
});
const store = createStore(rootReducer);

export default store;