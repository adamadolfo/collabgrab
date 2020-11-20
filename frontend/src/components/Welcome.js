import React from 'react';
import WelcomeNavbar from './WelcomeNavbar'
import {useSelector, useDispatch} from 'react-redux'
import {logged} from '../actions'


function Welcome() {
    const loggedIn = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()

    const textStyle = {
        fontSize: "5rem", 
        color: "white"
    }

    return (
        <div className="welcome">
            <WelcomeNavbar />
            <br/>
            <br/>
            <br/>
            <br/>
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    </div>
                    <div class="col-xl-">
                        {loggedIn ? null : <h1 style={textStyle}> Bring an idea to life. </h1>}
                        <h1 style={textStyle}> Collaborate with people world-wide. </h1>
                        <button onClick={() => dispatch(logged())} type="button" class="btn btn-outline-light btn-lg btn-block">sign-up</button>
                    </div>
                    <div class="col-sm">
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Welcome;