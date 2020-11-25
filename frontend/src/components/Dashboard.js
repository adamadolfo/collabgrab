import React, { useState, useEffect } from 'react';
import MainNav from "./MainNav"
import { useSelector } from 'react-redux'
import AddUserSkill from './AddUserSkill'
import AddUserProject from './AddUserProject';


const Dashboard = () => {


    const user = useSelector(state => state.user.user)
   
    return(
        <div className='dashboard'>
            <MainNav />
            <h1>
                {user.name}
            </h1>

            <br/>
            <br/>


            <h1>
                Skills
            </h1>
            <p> list of skills this user has </p>
            {user.skills.map(skill => <div style={{color: "#24454b", fontSize: "2rem"}}> {skill.name} </div>)}
            <p> click for a form to add a new skill </p>
            <AddUserSkill/>
            <br/>
            <br/>
            <br/>
            <h1>
                Projects
            </h1>
            <p> list of projects this user has </p>
            {user.projects.map(project => <div style={{color: "#24454b", fontSize: "2rem"}}> {project.name} </div>)}
            <br/>
            <p>  click for a form to add a new project </p>
            <AddUserProject/>
        </div>
    )






}


      export default Dashboard