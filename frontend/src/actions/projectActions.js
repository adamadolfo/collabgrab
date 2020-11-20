import { FETCH_PROJECTS } from './types'

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