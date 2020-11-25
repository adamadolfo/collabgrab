import { FETCH_PROJECTS, ADD_PROJECT } from './types'

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

export function addProject(projectData, id) {
    
    return function(dispatch) {
        fetch('http://localhost:3001/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projectData)
        })
        .then(r => r.json())
        .then(project => {
            if (project.working) {
                dispatch({ 
                    type: ADD_PROJECT,
                    payload: project.project
                })
            //     let collab = {
            //         user_id: id, 
            //         project_id: project.project
            //     }
            //     fetch('http://localhost:3001/collaborations', {
            //         method: 'POST',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify(collab)
            //     }).then(r => r.json())
            //     .then(collaboration => dispatch({

            //     })
            }

       })
    }
}