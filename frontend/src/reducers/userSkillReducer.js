import { CREATE_USER_SKILL } from '../actions/types'

const initialState = {
    user_skill: {}
}

export default function(state = initialState, action) {
    console.log('test')
    switch(action.type) {
        case CREATE_USER_SKILL:
            return {
                ...state,
                user_skill: action.payload
            }
        default:
            return state
    }
}