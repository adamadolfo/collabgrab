import { SIGN_UP, LOG_IN} from './types'

export function signUp(userData) {
    return function(dispatch) {
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(user => dispatch({
            type: SIGN_UP,
            payload: user
        }))
    }
}

export function logIn(userData) {
    return function(dispatch) {
        fetch('http://localhost:3001/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        .then(r => r.json())
        .then(user => dispatch({
            type: LOG_IN,
            payload: user
        }))
    }
}