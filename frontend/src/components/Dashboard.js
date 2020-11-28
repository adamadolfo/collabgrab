import React, { useState, useEffect} from 'react';
import MainNav from "./MainNav"
import { useSelector } from 'react-redux'
import AddUserSkill from './AddUserSkill'
import AddUserProject from './AddUserProject';


const Dashboard = () => {


    let user = useSelector(state => state.user.user)
    
    const [hideSkills, setHideSkills] = useState(true)
    const [hideProjects, setHideProjects] = useState(true)

    const showSkillForm = () => {
        setHideSkills(!hideSkills)
    }

    const showProjectForm = () => {
        setHideProjects(!hideProjects)
    }

    return(
        <div className='dashboard'>
            <MainNav />
            <div class="container">

                <div class="row dash-row-one">
                    <div class="col-6 dash-one-one">
                        <h1 >
                            {user.name}
                        </h1>
                    </div>
                    <div class="col">
        
                    </div>
                    <div class="col-5 dash-one-three">
                        <h1>
                            Skills
                        </h1>
                        <p> list of skills this user has </p>
                        <button onClick={showSkillForm} type="button" class="btn btn-secondary" style={{marginBottom: "20px", marginTop: "20px"}}>Add a new skill </button> 
                        <br/>
                        {Object.keys(user).length !== 0 ? user.skills.map(skill => <div className='custom-card' > <h6 className='custom-card-text'>{skill.name}</h6> </div>) : null}

                    </div>
                </div>

                <div class="row dash-row-2">
                    <div class="col-2">
                    
                    </div>
                    <div class="col-5">
                    
                    </div>
                    <div class="col-5">
                    {/* <button onClick={showSkillForm} type="button" class="btn btn-secondary" style={{marginBottom: "50px", marginTop: "50px"}}>Add a new skill </button>  */}
                        { !hideSkills ? <AddUserSkill/> : null }
                    </div>
                </div>
                <div class="row dash-row-3">
                    <div class="col-2">
                    
                    </div>
                    <div class="col-5">
                    
                    </div>
                    <div class="col-5">
                        <h1>
                            Projects
                        </h1>
                        <p> list of projects this user has </p>
                        {Object.keys(user).length !== 0 ? user.projects.map(project => <div className='custom-card'> <h6 className='custom-card-text'>{project.name}</h6> </div>) : null}
                        <br/>
                        <button onClick={showProjectForm} type="button" class="btn btn-secondary" style={{marginBottom: "20px", marginTop: "20px"}}>Create a new Project </button> 
                        { !hideProjects ? <AddUserProject/> : null }
                    </div>
                </div>
            </div>

        </div>
    )






}


      export default Dashboard