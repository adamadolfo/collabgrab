import React, { useState, useEffect} from 'react';
import MainNav from "./MainNav"
import Footer from './Footer'
import { useSelector } from 'react-redux'
import AddUserSkill from './AddUserSkill'
import AddUserProject from './AddUserProject';
import AddUserProfile from './AddUserProfile';


const Dashboard = () => {


    let user = useSelector(state => state.user.user)
    
    const [hideSkills, setHideSkills] = useState(true)
    const [hideProjects, setHideProjects] = useState(true)
    const [hideEdit, setHideEdit] = useState(true)

    const showSkillForm = () => {
        setHideSkills(!hideSkills)
    }

    const showProjectForm = () => {
        setHideProjects(!hideProjects)
    }

    const showEditForm = () => {
        setHideEdit(!hideEdit)
    }

    return(
        <div className='dashboard'>
            <MainNav />
            <div class="container">

                <div class="row dash-row-1">

                    <div class="col dash-one-one">
                        {hideEdit ? 
                        
                        <>
                            <h1 style={{margin: "10px"}} >
                                {user.name}
                            </h1>   
                            <img src={user.img} />
                            <p> {user.location} </p>
                            <p> {user.bio} </p>
                            
                            <button onClick={showEditForm} type="button" class="btn btn-secondary" style={{bottom: "10px", position: "absolute", right: "10px"}}>Edit Profile </button>
                        </>
                        : 
                        <>
                            <AddUserProfile /> 
                            <button onClick={showEditForm} type="button" class="btn btn-secondary" style={{bottom: "10px", position: "absolute", right: "10px"}}> Back </button> 
                        </>
                
                        }
                    </div> 
                
                </div>

                <div class="row dash-row-2" style={{marginTop: "100px", backgroundColor: 'white'}} >
                 
                    <div class="col">
                        <h1>
                            Skills
                        </h1>
                      
                        <button onClick={showSkillForm} type="button" class="btn btn-secondary" style={{marginBottom: "20px", marginTop: "20px"}}>Add a new skill </button> 
                        <br/>
                        {Object.keys(user).length !== 0 ? user.skills.map(skill => <div className='custom-card' > <h6 className='custom-card-text'>{skill.name}</h6> </div>) : null}

                        { !hideSkills ? <AddUserSkill/> : null }
                    </div>
                
                </div>
                <div class="row dash-row-3" style={{marginTop:"100px", height: "auto", marginBottom: "100px"}}>
               
                    <div class="col">
                        <h1 >
                            Projects
                        </h1>
                        {Object.keys(user).length !== 0 ? user.projects.map(project => <div className='custom-card'> <h6 className='custom-card-text'>{project.name}</h6> </div>) : null}
                        <br/>
                        <button onClick={showProjectForm} type="button" class="btn btn-secondary" style={{marginBottom: "20px", marginTop: "20px"}}>Create a new Project </button> 
                        { !hideProjects ? <AddUserProject/> : null }
                    
                    </div>
                    
                </div>
              
            </div>
            <Footer />
        </div>
    )






}


      export default Dashboard