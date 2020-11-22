import React from 'react';
import WelcomeNavbar from './WelcomeNavbar'

import { Link } from 'react-router-dom';




function Welcome() {
   

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
                        <h1 style={textStyle}> Bring an idea to life. </h1>
                        <h1 style={textStyle}> Collaborate with people world-wide. </h1>
                        <Link to='/signup'>
                            <button type="button" class="btn btn-outline-light btn-lg btn-block">sign-up</button>
                        </Link>
                    </div>
                    <div class="col-sm">
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Welcome;