import loggedReducer from './isLogged';
import skillReducer from './skillReducer'
import projectReducer from './projectReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loggedIn: loggedReducer,
    skills: skillReducer,
    projects: projectReducer,
    user: userReducer
})

export default allReducers