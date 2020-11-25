
import { CREATE_USER_SKILL } from './types'

export function createUserSkill(userSkillData) {
    return function(dispatch) {
        fetch('http://localhost:3001/user_skills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userSkillData)
        }
        )
        .then(r => r.json())
        .then(user_skill => {
            debugger
            dispatch({
                type: CREATE_USER_SKILL,
                payload: user_skill
            })
            })
    }
}