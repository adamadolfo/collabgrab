import React from "react"
import MainNav from "./MainNav"
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const user = useSelector(state => state.user.user.user)
    return(
        <>
            <MainNav />
            <h1>
                {user} picture
            </h1>

            <br/>
            <br/>


            <h1>
                Skills
            </h1>
            <p> list of skills this user has </p>
            <p> click for a form to add a new skill </p>
            <br/>
            <br/>
            <br/>

            <h1>
                Projects
            </h1>
            <p> list of projects this user has </p>
            <p>  click for a form to add a new project </p>
            <br/>
        </>
    )






}



export default Dashboard