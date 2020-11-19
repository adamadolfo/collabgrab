import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loggedIn: loggedReducer
})

export default allReducers