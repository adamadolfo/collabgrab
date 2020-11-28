
import { LOG_IN } from './types'

export function createUserSkill(userSkillData) {
    return function(dispatch) {
        fetch('http://localhost:3001/user_skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userSkillData)
        }
        )
        .then(r => r.json())
        .then(user => {
            dispatch({
                type: LOG_IN,
                payload: user
            })
            })
    }
}