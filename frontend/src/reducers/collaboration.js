import { NEW_COLLAB } from '../actions/types'

const initialState = {
    collab: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NEW_COLLAB:
            return {
                ...state,
                collab: action.payload
            }
        default:
            return state
    }
}