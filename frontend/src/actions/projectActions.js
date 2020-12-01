import { FETCH_PROJECTS, LOG_IN, CLICKED_PROJECT } from './types'

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


export function clickedProject(projectObj) {
    return function(dispatch) {
        fetch(`http://localhost:3001/projects/${projectObj.id}`)
        .then(r => r.json())
        .then(clickedProject => dispatch({
            type: CLICKED_PROJECT,
            payload: clickedProject
        }))
    }
}



export function sendMessage(messageData) {
    return function(dispatch) {
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageData)
        })
        .then(r => r.json())
        .then(project => dispatch({
            type: CLICKED_PROJECT,
            payload: project
        }))
    
    }
}