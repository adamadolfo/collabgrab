import { SIGN_UP} from './types'

export function signUp(userData) {
    return function(dispatch) {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(user => dispatch({
            type: SIGN_UP,
            payload: user
        }))
    }
}