import { FETCH_SKILLS } from '../actions/types'

const initialState = {
    skillsArray: []
}

const skillReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SKILLS:
            return {
                ...state, 
                skillsArray: action.payload
            };
        default: 
            return state;
    }
}

export default skillReducer