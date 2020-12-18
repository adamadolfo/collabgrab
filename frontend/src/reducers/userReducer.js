import { SIGN_UP, LOG_IN, GET_FEED } from '../actions/types'

const initialState = {
    user: {},
    feed: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return {
                ...state, 
                user: action.payload
            };
        case LOG_IN:
            return {
                ...state,
                user: action.payload
            }
        case "EDIT_PROFILE":
            return {
                ...state,
                user: action.payload
            }
        case GET_FEED:
            return {
                ...state,
                feed: action.payload
            }
    
        default: 
            return state;
    }
}

export default userReducer