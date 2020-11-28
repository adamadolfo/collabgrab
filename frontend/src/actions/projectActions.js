import { FETCH_PROJECTS, LOG_IN } from './types'

export function fetchProjects() {
    return function(dispatch) {
        fetch('http://localhost:3001/projects')
        .then(r => r.json())
        .then(projects => dispatch({
            type: FETCH_PROJECTS,
            payload: projects
        }))
    }
}

export function addProject(projectData) {
    
    return function(dispatch) {
        fetch('http://localhost:3001/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectData)
        })
        .then(r => r.json())
        .then(user => {
           
                dispatch({ 
                    type: LOG_IN,
                    payload: user
                })
   
            

       })
    }
}