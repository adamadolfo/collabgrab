import { SIGN_UP, LOG_IN } from '../actions/types'

const initialState = {
    user: {}
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
    
        default: 
            return state;
    }
}

export default userReducer