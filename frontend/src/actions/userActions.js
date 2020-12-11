import { SIGN_UP, LOG_IN, LOGOUT, EDIT_PROFILE} from './types'

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

export function editProfile(userData) {
    return function(dispatch) {
        let type = null
        let payload = null
        fetch(`http://localhost:3001/users/${userData.user_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(r => r.json())
            .then(user => {
                type = "EDIT_PROFILE"
                payload = user
                     dispatch({ 
                    type: type, 
                    payload: payload 
                    })
                
            })

    } 
  
}

export const logOut = () => {

    return function(dispatch) {
   
        fetch('http://localhost:3001/logout', {
            method: 'DELETE'
        })
        .then(r => r.json())
        .then(r => {
         
        })
    }
}

export const follow = (followData) => {
    return function(dispatch) {

        fetch('http://localhost:3001/follow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(followData)
        })
        .then(r => r.json())
        .then(user => dispatch({
            type: LOG_IN,
            payload: user
        }))
    }
}