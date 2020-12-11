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
    let [loading, setLoading] = useState(true)

    const getdata = async (user) => {
        return await user
        
      }

    
    const finishLoading = (user) => {
        debugger
        if (Object.keys(user).length !== 0) {
                setLoading(!loading)
        }
    }

    useEffect(() => {
        getdata()
    })


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
                        
                        <div className="profile">
                            <div className='container id-card'>
                                <div className="row">
                                    <h1 style={{marginLeft: "100px", marginBottom: "40px", marginTop: "40px"}} >
                                        {user.name}
                                    </h1>
                                      
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <img src={user.img} style={{height: "250px", width: "250px", marginLeft: "20px"}}/>
                                    </div>
                                    <div className="col-1">

                                    </div>
                                    <div className="col-8">
                                        <h3>{user.location}</h3>
                                        <p style={{fontSize: "1.25rem"}}>{user.bio} </p>
                                        <div> {!loading ? <div> <span> followers: {user.followers.length} </span> <span> following: { user.followeds.length } </span> </div>: finishLoading(user)}  </div>
                                        <div style={{fontSize: "2rem", marginTop: "50px"}}>karma: <span style={{color: "#84c4be"}}>{user.karma}</span></div>
                                        <button onClick={showEditForm} type="button" class="btn btn-secondary" style={{bottom: "10px", position: "absolute", right: "10px"}}>Edit Profile </button>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        
                        : 
                        <>
                            <AddUserProfile showEditForm={showEditForm} /> 

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