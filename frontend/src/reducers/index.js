import loggedReducer from './isLogged';
import skillReducer from './skillReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    loggedIn: loggedReducer,
    skills: skillReducer,
    projects: projectReducer
})

export default allReducers