import React, { useState, useEffect} from 'react';
import MainNav from "./MainNav"
import { useSelector } from 'react-redux'


const Profile = () => {


    let user = useSelector(state => state.user.user)
    


    return(
        <div className='dashboard'>
            <MainNav />
            <div class="container">

                <div class="row dash-row-1">

                    <div class="col dash-one-one">
                       
                        <h1 style={{color: "white", margin: "10px"}} >
                            {user.name}
                        </h1>

                        
                    </div> 
                
                </div>

                <div class="row dash-row-2" style={{marginTop: "100px"}} >
                 
                    <div class="col">
                        <h1>
                            Skills
                        </h1>
                      
    
                        <br/>
                    
                        {Object.keys(user).length !== 0 ? user.skills.map(skill => <div className='custom-card' > <h6 className='custom-card-text'>{skill.name}</h6> </div>) : null}

                        
                    </div>
                
                </div>
                <div class="row dash-row-3" style={{marginTop:"100px"}}>
               
                    <div class="col">
                        <h1 >
                            Projects
                        </h1>
                        {Object.keys(user).length !== 0 ? user.projects.map(project => <div className='custom-card'> <h6 className='custom-card-text'>{project.name}</h6> </div>) : null}
                        <br/>
                    
                    
                    </div>
                    
                </div>
              
            </div>
           
        </div>
    )






}


      export default Profile