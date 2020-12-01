import { FETCH_PROJECTS, ADD_PROJECT, CLICKED_PROJECT } from '../actions/types'

const initialState = {
    projects: [],
    project: {},
    clickedProject: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT: 
            return {
                ...state,
                project: action.payload
            }
        case CLICKED_PROJECT: 
            return {
                ...state,
                clickedProject: action.payload
            }
        default:
            return state
    }
}