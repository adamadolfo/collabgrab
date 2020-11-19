import React from 'react';
import WelcomeNavbar from './WelcomeNavbar'
import {useSelector, useDispatch} from 'react-redux'
import {logged} from '../actions'
// import image from 'logo.png'

function Welcome() {
    const loggedIn = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()
    return (
        <div className="welcome">
            <WelcomeNavbar />
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    </div>
                    <div class="col-xl-">
                        {loggedIn ? null : <h1 style={{fontSize: "3.5rem"}}> Bring an idea to life. </h1>}
                        <h1 style={{fontSize: "3.5rem"}}> Collaborate with people world-wide </h1>
                        <button onClick={() => dispatch(logged())} type="button" class="btn btn-outline-light btn-lg btn-block">sign-up</button>}
                    </div>
                    <div class="col-sm">
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Welcome;