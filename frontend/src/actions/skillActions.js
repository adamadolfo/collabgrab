import { FETCH_SKILLS } from './types'

export function fetchSkills() {
    return function(dispatch) {
        fetch('http://localhost:3001/skills')
        .then(r => r.json())
        .then(skills => dispatch({
            type: FETCH_SKILLS,
            payload: skills
        }))
    }
}